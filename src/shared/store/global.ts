import { GV, DATA_STRING, CONFIG } from "../../shared/constants/names";

const { [DATA_STRING]: dataString='' } = window[GV]


export const GVData: any = JSON.parse( unescape( dataString ) )
export const GVConfig = GVData[CONFIG]