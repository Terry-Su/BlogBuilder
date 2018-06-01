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
import { isNil } from "lodash"
import { DEFAULT_CONFIG } from "./constants/default/index"
import Category from '../../client/src/nav/Newest';
const dirTree = require( "directory-tree" )
var Ajv = require( "ajv" )
var ajv = new Ajv()

export class Store {
  root: Path
  output: Path
  config: Config = DEFAULT_CONFIG
  blogsInfo: BlogInfo[] = []
}

export class Getters {
  store: Store

  constructor( store: Store ) {
    this.store = store
  }

  get clientNav(): ClientNav {
    const { newestBlogs, clientCategory } = this

    return
  }

  get newestBlogs(): ClientBlogOverview[] {
    const { blogsInfo } = this.store

    return blogsInfo
      .map( ( { name, createTime } ) => ( {
        name,
        createTime
      } ) )
      .sort( sort )

    function sort(
      { createTime: timeString1 }: ClientBlogOverview,
      { createTime: timeString2 }: ClientBlogOverview
    ) {
      if ( isValidDateString( timeString1 ) && isValidDateString( timeString2 ) ) {
        const t1 = Date.parse( timeString1 )
        const t2 = Date.parse( timeString2 )
        return t1 - t2
      }
      return 0
    }
  }

  get clientCategory(): Category {
    const { root, config, blogsInfo } = this.store

    const { topDirectoryName } = config

    let res: Category = {
      name : topDirectoryName,
      blogs: blogsInfo,
      categories: []
    }

    resolveRoot( root )

    return res

    function resolveRoot( path: string ) {
      const directoryInfo = dirTree( path )

      if ( directoryInfo ) {
        const { type } = directoryInfo
        const { categories: passingCategories } = res
        isDirectoryType( type ) && resolveDirectoryInfo( directoryInfo, passingCategories )
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
          name,
          blogs: this.getBlogsInfo( path ),
          categories: passingCategories
        } )

        children
          .filter( filterIsDirectoryType )
          .map( ( directoryInfo: any ) =>
            resolveDirectoryInfo( directoryInfo, passingCategories )
          )
      }
    }
  }

  getBlogsInfo( path: string ): BlogInfo[] {
    let res: BlogInfo[] = []
    
    resolveRoot( path )

    return res

    function resolveRoot( path: string ) {
      const directoryInfo = dirTree( path )

      if ( directoryInfo ) {
        const { type } = directoryInfo
        isDirectoryType( type ) && resolveDirectoryInfo( directoryInfo )
      }
    }

    function resolveDirectoryInfo( directoryInfo: any ) {
      const isTheBlogDirectoryInfo = isBlogDirectoryInfo( directoryInfo )

      if ( isTheBlogDirectoryInfo ) {
        const blogPropsFilePath: string = getBlogPropsFilePath( directoryInfo )
        const potentialBlogProps: any = readJsonFromFile( blogPropsFilePath )

        const isValid = ajv.validate( BLOG_PROPS_SCHEMA, potentialBlogProps )
        if ( isValid ) {
          const blogProps: BlogProps = potentialBlogProps
          const blogPath: Path = getBlogFilePath( directoryInfo )

          const name: string = notNil( blogProps.name ) ?
            blogProps.name :
            getFileNameWithoutItsExtension( blogPath )
          const createTime: string = notNil( blogProps.createTime ) ?
            blogProps.createTime :
            null
          const tags: string[] = notNil( blogProps.tags ) ? blogProps.tags : []

          const blogInfo: BlogInfo = {
            path: blogPath,
            name,
            createTime,
            tags
          }

          res.push( blogInfo )
        }
      }
      if ( !isTheBlogDirectoryInfo ) {
        const { children } = directoryInfo
        children.filter( filterIsDirectoryType ).map( resolveDirectoryInfo )
      }
    }
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

  build( config?: Config ) {
    const { mutations, store } = this
    const { root } = store

    notNil( config ) && mutations.UPDATE_CONFIG( config )

    const blogsInfo: BlogInfo[] = this.getters.getBlogsInfo( root )
    mutations.UPDATE_BLOGS_INFO( blogsInfo )

    this.buildClientNavJson()
    this.buildCategories()
    this.buildTags()
    this.buildDetailPages()
  }

  buildClientNavJson() {
    const { clientNav } = this.getters
  }

  buildCategories() {}

  buildTags() {}

  buildDetailPages() {}
}
