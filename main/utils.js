function asyncDelete(path) {
  return Promise.resolve(new Promise((resolve) => {
    rimraf(path, () => {
      resolve()
    })
  }))
}

module.exports = {
  asyncDelete
}