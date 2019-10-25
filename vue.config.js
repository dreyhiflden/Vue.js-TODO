// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/skd-testcase/dist/'
    : '/',
  runtimeCompiler: true,
}