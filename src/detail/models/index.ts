import getModels from "../../shared/utils/getModels";

const files = require.context('.', false, /\.ts$/)


export default getModels( files )