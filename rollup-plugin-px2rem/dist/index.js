function rollupPluginPx2Rem() {
  return {
    name: 'rollup-plugin-px2rem',
    // buildStart() {
    //   console.log('buildStart')
    // },
    // if cli is vite, this hook will not be called, because vite has its own resolve plugin
    // resolveId(source: string, importer: string | undefined) {
    //   return source
    // },
    transform(code, id) {
      const item = new ModuledItem(id, code)
      const newCode = item.transformContent()
      if (newCode !== false) {
        return newCode
      } else {
        return code
      }
    },
    // buildEnd() {
    //   console.log('buildEnd')
    // },
  }
}
class ModuledItem {
  path
  content
  constructor(id, code) {
    this.path = id
    this.content = code
  }
  transformContent() {
    // css less scss
    if (this.path.endsWith('.css') || this.path.endsWith('.less') || this.path.endsWith('.scss')) {
      const newContent = this.content.replace(/(\d+)px/g, '$1rem')
      return newContent
    }
    return false
  }
}
function setHtmlFontSize(designWidth = 750) {
  const width = (document.body && document.body.clientWidth) || (document.documentElement && document.documentElement.clientWidth) || (window.screen && window.screen.availWidth)
  // document.getElementsByTagName('html')[0].style.fontSize = (width / designWidth) * 100 + 'px'
  document.getElementsByTagName('html')[0].style.fontSize = width / designWidth + 'px'
}

export { rollupPluginPx2Rem as default, setHtmlFontSize }
