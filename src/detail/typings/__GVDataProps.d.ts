import { COMMENT_ROOT, DETAIL, COMMENT } from "../constants/names";
import { CONFIG } from '../../shared/constants/names'

interface GVDataProps {
  [ COMMENT_ROOT ]?: string,
  [ CONFIG ]?: {
    [DETAIL]?: {
      [COMMENT]?: string
    }
  }
}