// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuejs-todo/dist/'
    : '/',
  runtimeCompiler: true,
}