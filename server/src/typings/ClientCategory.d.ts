import { NAME, BLOGS, CATEGORIES } from '../constants/names';
import { BlogInfo } from '../../src_old/interface/index';
import { ClientNavBlog } from './ClientNavBlog';

interface Category {
  [ NAME ]: string
  [ BLOGS ]: ClientNavBlog[]
  [ CATEGORIES ]: Category[]
}