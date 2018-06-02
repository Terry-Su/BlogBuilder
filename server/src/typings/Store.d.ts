import { BlogInfo } from '../../src_old/interface/index';
import { NAME, BLOGS, CATEGORIES } from '../constants/names';

interface Category {
  [ NAME ]: string
  [ BLOGS ]: BlogInfo[]
  [ CATEGORIES ]: Category[]
}

interface Tag {
  [ NAME ]: string,
  [ BLOGS ]: BlogInfo[]
}