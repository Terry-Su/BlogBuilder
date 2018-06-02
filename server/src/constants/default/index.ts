import { ALL } from '../names';
import { CONFIG_TOPDIRECTORYNAME, CONFIG_CLIENT_NEWEST_BLOGS_COUNT } from '../fields';
import { Config } from '../../typings/Config';

export const DEFAULT_CONFIG: Config = {
  [ CONFIG_TOPDIRECTORYNAME ]: ALL,
  [ CONFIG_CLIENT_NEWEST_BLOGS_COUNT ]: 5
}