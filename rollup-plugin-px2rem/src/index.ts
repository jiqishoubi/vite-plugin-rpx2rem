import { Plugin } from 'rollup'

/**
 * @example
 * {
 *  additionalTest: [/\.js$/], // default is [/\.css$/, /\.less$/, /\.scss$/, /\.jsx$/, /\.tsx$/] // 一般不需要配置
 *  include: [path.resolve(__dirname, 'src')],
 *  exclude: [/node_modules/],
 * }
 */
export interface IRollupPluginPx2RemOptions {
  additionalTest?: RegExp[]
  include?: (RegExp | string)[]
  exclude?: (RegExp | string)[]
}

export const defaultOptions: IRollupPluginPx2RemOptions = {
  exclude: [/node_modules/],
}

export default function rollupPluginPx2Rem(options?: IRollupPluginPx2RemOptions): any {
  const test = (() => {
    const defaultTest = [/\.css$/, /\.less$/, /\.scss$/, /\.jsx$/, /\.tsx$/] // these are must be included
    if (options?.additionalTest) {
      return [...defaultTest, ...options.additionalTest]
    } else {
      return defaultTest
    }
  })()
  const include = (options?.include || []) as (RegExp | string)[]
  const exclude = (options?.exclude || defaultOptions.exclude) as (RegExp | string)[]

  // console.log('🚀 ~ test', test)
  // console.log('🚀 ~ include', include)
  // console.log('🚀 ~ exclude', exclude)

  return {
    name: 'rollup-plugin-px2rem',
    // if cli is vite, this hook will not be called, because vite has its own resolve plugin
    // resolveId(source: string, importer: string | undefined) {
    //   return source
    // },
    transform(code: string, id: string) {
      // 1. judge include and exclude
      if (
        include.some((t) => _match(t, id)) && //
        !exclude.some((t) => _match(t, id))
      ) {
        // 2. judge test,file type
        if (test.some((t) => t.test(id))) {
          // 3. replace
          return handleReplace(code, id)
        }
      }
      return code
    },
  } as Plugin
}

export function setHtmlFontSize(designWidth: number = 750) {
  const width = (document.body && document.body.clientWidth) || (document.documentElement && document.documentElement.clientWidth) || (window.screen && window.screen.availWidth)
  // document.getElementsByTagName('html')[0].style.fontSize = (width / designWidth) * 100 + 'px'
  document.getElementsByTagName('html')[0].style.fontSize = width / designWidth + 'px'
}

function _match(t: string | RegExp, id: string): boolean {
  if (typeof t === 'string') {
    return id.includes(t)
  } else {
    return t.test(id)
  }
}

function handleReplace(code: string, id: string) {
  console.log('🚀 ~ id:', id)

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
}
