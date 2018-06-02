import { CLIENT_CATEGORY_NAME, CLIENT_CATEGORY_CATEGORIES } from '../constants/fields';
interface ClientCategory {
  [ CLIENT_CATEGORY_NAME ]: string  
  [ CLIENT_CATEGORY_CATEGORIES ]: ClientCategory[]
}