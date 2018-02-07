import {
  BlogOriginInfo,
  Path,
  Clue,
  BlogPropComputed,
  BlogRelativeUrl,
  ClueCategory,
  ClueTag
} from "./interface/index"
import readFileJson from "./util/readFileJson"
import { defaultBlogProp } from "./store/initialState"
import { getBlogPropComputed, getOutputCategoryChunksJsonPath, getOutputTagChunksJsonPath, getOutputCategoryJsonPath, getOutputTagJsonPath } from './store/index';
import { isArray, isString, uniq, isNil, mapValues } from 'lodash';
import isNotNil from "./util/isNotNil";
import setUniqArrayValueOfPlainObject from "./util/setUniqArrayValueOfPlainObject";
import * as PATH from 'path';
import { outputJSONSync } from "fs-extra";

const { keys } = Object

export default function( blogsOriginInfo: BlogOriginInfo[], output: Path ) {
  const clue: Clue = getClue( blogsOriginInfo )

  outputCategory( clue.category, output )
  outputTag( clue.tag, output )
  outputCategoryChunks( clue.category, output )
  outputTagChunks( clue.tag, output )

  function getClue( blogsOriginInfo: BlogOriginInfo[] ): Clue {
    let clueCategory: ClueCategory = {}
    let clueTag: ClueTag = {}

    blogsOriginInfo.map( setClue )

    const clue: Clue = {
      category: clueCategory,
      tag     : clueTag
    }

    return clue

    function setClue( blogOriginInfo: any ) {
      const blogPropComputed: BlogPropComputed = getBlogPropComputed(
        blogOriginInfo
      )
      const {
        category,
        tag,
        relativeUrl
      }: {
        category: string | string[]
        tag: string | string[]
        relativeUrl: BlogRelativeUrl
      } = blogPropComputed
      
      if ( isString( category ) ) {
        setUniqArrayValueOfPlainObject( clueCategory, category, [ relativeUrl ] )
      }
      if( isArray( category ) ) {
        category.map( resolveOneCategory )
      }

      if ( isString( tag ) ) {
        setUniqArrayValueOfPlainObject( clueTag, tag, [ relativeUrl ] )
      }
      if( isArray( tag ) ) {
        tag.map( resolveOneTag )
      }

      function resolveOneCategory( oneCategory: string  ) {
        setUniqArrayValueOfPlainObject( clueCategory, oneCategory, [ relativeUrl ] )
      }

      function resolveOneTag( oneTag: string ) {
        setUniqArrayValueOfPlainObject( clueTag, oneTag, [ relativeUrl ] )
      }

    }
  }

  function outputCategory( clueCategory: ClueCategory, output: Path ) {
    const json = keys( clueCategory )
    const path = getOutputCategoryJsonPath( output )
    outputJSONSync( path, json )
  }

  function outputTag( clueTag: ClueCategory, output: Path ) {
    const json = keys( clueTag )
    const path = getOutputTagJsonPath( output )
    outputJSONSync( path, json )
  }
  

  function outputCategoryChunks( clueCategory: ClueCategory, output: Path ) {
    mapValues( clueCategory, outputJson )

    function outputJson( json: string[], key: string ) {
      const path = getOutputCategoryChunksJsonPath( key, output )
      outputJSONSync( path, json )
    }
  }

  function outputTagChunks( clueTag: ClueTag, output: Path ) {
    mapValues( clueTag, outputJson )

    function outputJson( json: string[], key: string ) {
      const path = getOutputTagChunksJsonPath( key, output )
      outputJSONSync( path, json )
    }
  }
}
