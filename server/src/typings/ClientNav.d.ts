import { CLIENT_NAV_NEWEST_BLOGS, CLIENT_NAV_CATEGORY, CLIENT_NAV_TAGS } from '../constants/fields';
import { ClientBlogOverview } from './ClientBlogOverview';
import { ClientCategory } from './ClientCategory';

interface ClientNav {
  [ CLIENT_NAV_NEWEST_BLOGS ]: ClientBlogOverview[]
  [ CLIENT_NAV_CATEGORY ]: ClientCategory,
  [ CLIENT_NAV_TAGS ]: string[]
}