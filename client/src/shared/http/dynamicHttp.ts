import { CATEGORY, TAG } from '../store/constant';

export function GET_CATEGORY_CHUNK( chunk: string ): string {
  return `${CATEGORY}/${chunk}.json`
}


export function GET_TAG_CHUNK( chunk: string ): string {
  return `${TAG}/${chunk}.json`
}
