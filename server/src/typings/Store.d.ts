import { BlogInfo } from '../../src_old/interface/index';
import { STORE_CATEGORY_NAME, STORE_CATEGORY_BLOGS, STORE_CATEGORY_CATEGORIES, STORE_TAG_NAME, STORE_TAG_BLOGS } from '../constants/fields';

interface Category {
  [ STORE_CATEGORY_NAME ]: string
  [ STORE_CATEGORY_BLOGS ]: BlogInfo[]
  [ STORE_CATEGORY_CATEGORIES ]: Category[]
}

interface Tag {
  [ STORE_TAG_NAME ]: string,
  [ STORE_TAG_BLOGS ]: BlogInfo[]
}