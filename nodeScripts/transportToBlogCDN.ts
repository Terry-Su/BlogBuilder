const PATH = require('path')
const FS = require('fs-extra')


const SOURCE = PATH.resolve(__dirname, "../build/scripts")
const TARGET = PATH.resolve(__dirname, "../../BlogCDN/scripts")


FS.mkdirpSync(TARGET)
FS.copySync(SOURCE, TARGET)

