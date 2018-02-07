import { fetchCategory, fetchTag, fetchNewest, fetchCategoryChunk, fetchTagChunk } from '../http/index';

export function asyncGetCategories() {
  return fetchCategory()
}

export function asyncGetCategoryChunk( chunk: string ) {
  return fetchCategoryChunk( chunk )
}

export function asyncGetTags() {
  return fetchTag()
}

export function asyncGetTagChunk( chunk: string ) {
  return fetchTagChunk( chunk )
}

export function asyncGetNewest() {
  return fetchNewest()
}

export function getUrlByRelativeUrl( relativeUrl: string ) {
  return `/${relativeUrl}`
}