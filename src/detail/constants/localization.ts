import { CN } from './../../shared/constants/names';
import { getLangString } from "../../shared/commonUtils/lang"
import { EN } from "../../shared/constants/names";

export const REPRINT_NOTE = getLangString( {
  [ EN ]: "Reprinting Note",
  [ CN ]: "转载说明"
} )

export const REPRINT_NOTE_DETAIL = getLangString( {
  [ EN ]: `Author all Rights reserved, reprint please indicate
  the source, no commercial reprint`,
  [ CN ]: `作者版权所有，转载请注明出处，谢绝商业转载`
} )


export const HOME_PAGE = getLangString( {
  [EN]: `Home`,
  [CN]: `主页`
} )


export const BE_THE_FIRST_TO_COMMENT = getLangString( {
  [EN]: `Be the first to comment`,
  [CN]: `撰写第一条评论`
} )


export const BE_THE_FIRST_TO_COMMENT_ON_GITHUB = getLangString( {
  [EN]: `${BE_THE_FIRST_TO_COMMENT[EN]} on github`,
  [CN]: `撰写第一条评论（使用Github）`
} )

export const YOU_CAN_ALSO_COMMENT_ON_GITHUB = getLangString( {
  [EN]: `You can also comment on github`,
  [CN]: `撰写评论（使用Github）`
} )

export const WRITE_A_COMMENT = getLangString( {
  [EN]: `Write a comment`,
  [CN]: `撰写评论`
} )

