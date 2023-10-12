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
export declare const defaultOptions: IRollupPluginPx2RemOptions
export default function rollupPluginPx2Rem(options?: IRollupPluginPx2RemOptions): any
export declare function setHtmlFontSize(designWidth?: number): void
