import { Plugin } from 'rollup'

/**
 * @example
 * {
 *  include: [path.resolve(__dirname, 'src')],
 *  exclude: [/node_modules/], // default value is [/node_modules/]
 * }
 */
export interface IRpx2RemOptions {
  include?: (RegExp | string)[]
  exclude?: (RegExp | string)[]
}

export const defaultOptions: IRpx2RemOptions = {
  exclude: [/node_modules/],
}

export default function rpx2rem(options?: IRpx2RemOptions): any {
  const include = (options?.include || []) as (RegExp | string)[]
  const exclude = (options?.exclude || defaultOptions.exclude) as (RegExp | string)[]

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
        // next. replace
        return handleReplace(code)
      }
      return code
    },
    // vite plugin hooks
    enforce: 'pre',
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

function handleReplace(code: string) {
  // all rpx to rem
  return code.replace(/rpx/g, 'rem')
}
