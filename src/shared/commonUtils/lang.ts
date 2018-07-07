import { notNil } from './../../shared/utils/lodash';
import { GV, CN } from './../constants/names';
import { CONFIG, LANG, EN } from '../constants/names';
import { GVConfig } from '../store/global';

interface Props {
  [EN]: string,
  [CN]: string,
}

export const getLangString = ( props: Props ) => {
  let lang = EN
  try {
    lang = GVConfig[LANG]
  } catch( e ) {}
  let res = props[ lang ]

  return notNil( res ) ? res: props[ EN ]
}