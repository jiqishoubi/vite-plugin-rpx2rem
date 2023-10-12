const defaultOptions = {
  include: ['src/**'],
  exclude: ['node_modules/**'],
}
function rollupPluginPx2Rem(options) {
  const test = (() => {
    const defaultTest = [/\.css$/, /\.less$/, /\.scss$/, /\.jsx$/, /\.tsx$/]
    if (options?.additionalTest) {
      return [...defaultTest, ...options.additionalTest]
    } else {
      return defaultTest
    }
  })()
  const include = options?.include || defaultOptions.include
  const exclude = options?.exclude || defaultOptions.exclude
  console.log('🚀 ~ test', test)
  console.log('🚀 ~ include', include)
  console.log('🚀 ~ exclude', exclude)
  return {
    name: 'rollup-plugin-px2rem',
    // if cli is vite, this hook will not be called, because vite has its own resolve plugin
    // resolveId(source: string, importer: string | undefined) {
    //   return source
    // },
    transform(code, id) {
      if (include.some((item) => id.includes(item)) && !exclude.some((item) => id.includes(item))) {
        // todo
        return code
      }
      // // css less scss
      // if (this.path.endsWith('.css') || this.path.endsWith('.less') || this.path.endsWith('.scss')) {
      //   const newContent = this.content.replace(/(\d+)px/g, '$1rem')
      //   return newContent
      // }
      // // js jsx ts tsx
      // else if (this.path.endsWith('.js') || this.path.endsWith('.jsx') || this.path.endsWith('.ts') || this.path.endsWith('.tsx')) {
      //   // todo
      //   // console.log('🚀 ~ this.path', this.path)
      //   // console.log('🚀 ~ this.content', this.content)
      //   return this.content
      // }
      return code
    },
  }
}
function setHtmlFontSize(designWidth = 750) {
  const width = (document.body && document.body.clientWidth) || (document.documentElement && document.documentElement.clientWidth) || (window.screen && window.screen.availWidth)
  // document.getElementsByTagName('html')[0].style.fontSize = (width / designWidth) * 100 + 'px'
  document.getElementsByTagName('html')[0].style.fontSize = width / designWidth + 'px'
}

export { rollupPluginPx2Rem as default, defaultOptions, setHtmlFontSize }
