import request from "../../shared/utils/request";

export const fetchConfig = () => request( '/config.json' )