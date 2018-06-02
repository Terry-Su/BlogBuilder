import {
  isDirectoryType,
  filterIsDirectoryType
} from "./blogBuilderUtils/dirTree"
import {
  isBlogDirectoryInfo,
  getBlogFilePath,
  getBlogPropsFilePath
} from "./blogBuilderUtils/getBlogsInfo"
import { notNil } from "./utils/lodash"
import getFileNameWithoutItsExtension from "./utils/getFileNameWithoutItsExtension"
import BLOG_PROPS_SCHEMA from "./constants/schemas/BLOG_PROPS_SCHEMA"
import readJsonFromFile from "./utils/readJsonFromFile"
import { isValidDateString } from "./blogBuilderUtils/validate"
import { isNil, cloneDeep, uniqWith, take } from "lodash"
import { DEFAULT_CONFIG } from "./constants/default/index"
import {
  BLOGS,
  CLIENT_NAV_NEWEST_BLOGS,
  CLIENT_NAV_CATEGORY,
  CLIENT_NAV_TAGS,
  BLOG_INFO_PATH,
  BLOG_INFO_CREATE_TIME,
  BLOG_INFO_TAGS,
  STORE_TAG_NAME,
  STORE_CATEGORY_NAME,
  CONFIG_TOPDIRECTORYNAME
} from "./constants/fields"
import BlogBuilder from "./BlogBuilder"
import UtilGetters from "./blogBuilderUtils/UtilGetters"
import { notEmpty, isEmpty } from "./utils/array"
import { ClientNav } from "./typings/ClientNav"
import { BlogInfo } from "../src_old/interface/index"
import { Category, Tag } from "./typings/Store"
import { ClientBlogOverview } from "./typings/ClientBlogOverview"
import { Config } from "./typings/Config"
import { ClientCategory } from "./typings/ClientCategory"
import { CONFIG_CLIENT_NEWEST_BLOGS_COUNT, BLOG_INFO_NAME } from './constants/fields';
import {
  STORE_TAG_BLOGS,
  STORE_CATEGORY_CATEGORIES,
  STORE_CATEGORY_BLOGS
} from "./constants/fields"
import * as FS from 'fs-extra'
import * as PATH from 'path';
import { CLIENT_NAV_JSON_RELATIVE_PATH } from './constants/pathNames';
import { outputJSONSync } from 'fs-extra';


const dirTree = require( "directory-tree" )

export class Store {
  root: Path
  output: Path
  config: Config = DEFAULT_CONFIG
  blogsInfo: BlogInfo[] = []
}

export class Getters {
  store: Store

  blogBuilder: BlogBuilder

  constructor( store: Store, blogBuilder: BlogBuilder ) {
    this.store = store
    this.blogBuilder = blogBuilder
  }

  get utilGetters(): UtilGetters {
    return this.blogBuilder.utilGetters
  }

  get category(): Category {
    const { root, config, blogsInfo } = this.store
    const { getBlogsInfo } = this.utilGetters

    const { [ CONFIG_TOPDIRECTORYNAME ]: topDirectoryName } = config

    let res: Category = {
      [ STORE_CATEGORY_NAME ]      : topDirectoryName,
      [ STORE_CATEGORY_BLOGS ]     : blogsInfo,
      [ STORE_CATEGORY_CATEGORIES ]: []
    }

    resolveRoot( root )

    return res

    function resolveRoot( path: string ) {
      const directoryInfo = dirTree( path )

      if ( directoryInfo ) {
        const { type } = directoryInfo
        const { [ STORE_CATEGORY_CATEGORIES ]: passingCategories } = res
        isDirectoryType( type ) &&
          resolveDirectoryInfo( directoryInfo, passingCategories )
      }
    }

    function resolveDirectoryInfo(
      directoryInfo: any,
      paramPassingCategories?: Category[]
    ) {
      const { name } = directoryInfo

      let passingCategories: Category[] = []

      const isTheBlogDirectoryInfo = isBlogDirectoryInfo( directoryInfo )

      if ( !isTheBlogDirectoryInfo ) {
        const { children, name, path } = directoryInfo

        paramPassingCategories.push( {
          [ STORE_CATEGORY_NAME ]      : name,
          [ STORE_CATEGORY_BLOGS ]     : getBlogsInfo( path ),
          [ STORE_CATEGORY_CATEGORIES ]: passingCategories
        } )

        children
          .filter( filterIsDirectoryType )
          .map( ( directoryInfo: any ) =>
            resolveDirectoryInfo( directoryInfo, passingCategories )
          )
      }
    }
  }

  get tags(): Tag[] {
    let res: Tag[] = []
    let excessiveRes: Tag[] = []

    const { blogsInfo } = this.store

    blogsInfo.map( updateExcessiveRes )

    return res

    function updateExcessiveRes( blogInfo: BlogInfo ) {
      const { [ BLOG_INFO_TAGS ]: tags } = blogInfo

      tags.map( ( tagString: string ) => {
        let tagInRes: Tag = res.filter(
          ( { [ STORE_TAG_NAME ]: theName }: Tag ) => theName === tagString
        )[ 0 ]

        if ( tagInRes ) {
          tagInRes[ STORE_TAG_BLOGS ] = [ ...tagInRes[ STORE_TAG_BLOGS ], blogInfo ]
        }
        if ( !tagInRes ) {
          const tag: Tag = {
            [ STORE_TAG_NAME ] : tagString,
            [ STORE_TAG_BLOGS ]: [ blogInfo ]
          }
          res.push( tag )
        }
      } )
    }
  }

  get clientNewestBlogs(): ClientBlogOverview[] {
    const { blogsInfo, config } = this.store
    const { [ CONFIG_CLIENT_NEWEST_BLOGS_COUNT ]: count } = config
    const all: ClientBlogOverview[] = blogsInfo
      .map(
        ( { [ BLOG_INFO_NAME ]: name, [ BLOG_INFO_CREATE_TIME ]: createTime } ) => ( {
          name,
          createTime
        } )
      )
      .sort( sort )
    const res: ClientBlogOverview[] = take( all, count )
    return res

    function sort(
      { [ BLOG_INFO_CREATE_TIME ]: timeString1 }: ClientBlogOverview,
      { [ BLOG_INFO_CREATE_TIME ]: timeString2 }: ClientBlogOverview
    ) {
      if ( isValidDateString( timeString1 ) && isValidDateString( timeString2 ) ) {
        const t1 = Date.parse( timeString1 )
        const t2 = Date.parse( timeString2 )
        return t1 - t2
      }
      return 0
    }
  }

  get clientCategory(): ClientCategory {
    const { category } = this
    let res: any = cloneDeep( category )
    resolveCategory( res )
    recurCategories( res[ STORE_CATEGORY_CATEGORIES ] )

    return res

    function recurCategories( categories: Category[] ) {
      categories.map( category => {
        resolveCategory( category )
        recurCategories( category[ STORE_CATEGORY_CATEGORIES ] )
      } )
    }

    function resolveCategory( category: Category ) {
      delete category[ BLOGS ]
    }
  }

  get clientTags(): string[] {
    return this.tags.map( ( { [ STORE_TAG_NAME ]: name }: Tag ) => name )
  }

  get clientNav(): ClientNav {
    const { clientNewestBlogs, clientCategory, clientTags } = this
    return {
      [ CLIENT_NAV_NEWEST_BLOGS ]: clientNewestBlogs,
      [ CLIENT_NAV_CATEGORY ]    : clientCategory,
      [ CLIENT_NAV_TAGS ]        : clientTags
    }
  }

  get clientNavJsonPath(): string {
    const { output } = this.store
    return PATH.resolve( output, CLIENT_NAV_JSON_RELATIVE_PATH )
  }
}

export class Mutations {
  store: Store
  getters: Getters

  constructor( getters: Getters ) {
    this.store = getters.store
    this.getters = getters
  }

  UPDATE_ROOT( root: Path ) {
    this.store.root = root
  }

  UPDATE_OUTPUT( output: Path ) {
    this.store.output = output
  }

  UPDATE_CONFIG( config: Config ) {
    this.store.config = config
  }

  UPDATE_BLOGS_INFO( blogsInfo: BlogInfo[] ) {
    this.store.blogsInfo = blogsInfo
  }
}

export class Actions {
  store: Store
  getters: Getters
  mutations: Mutations

  constructor( mutations: Mutations ) {
    this.store = mutations.getters.store
    this.getters = mutations.getters
    this.mutations = mutations
  }

  get utilGetters(): UtilGetters {
    return this.getters.utilGetters
  }

  build( config?: Config ) {
    const { mutations, store } = this
    const { root } = store
    const { getBlogsInfo } = this.utilGetters

    notNil( config ) && mutations.UPDATE_CONFIG( config )

    const blogsInfo: BlogInfo[] = getBlogsInfo( root )
    mutations.UPDATE_BLOGS_INFO( blogsInfo )

    this.buildClientNavJson()
    this.buildCategories()
    this.buildTags()
    this.buildDetailPages()
  }

  buildClientNavJson() {
    const { clientNav, clientNavJsonPath } = this.getters
    FS.outputJSONSync( clientNavJsonPath, clientNav )
  }

  buildCategories() {}

  buildTags() {}

  buildDetailPages() {}
}
