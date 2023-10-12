/**
 * @example
 * {
 *  additionalTest: ['.js'],
 *  include: ['src/**'],
 *  exclude: ['node_modules/**', 'dist/**'],
 * }
 */
export interface IRollupPluginPx2RemOptions {
  additionalTest?: string[]
  include?: string[]
  exclude?: string[]
}
export declare const defaultOptions: IRollupPluginPx2RemOptions
export default function rollupPluginPx2Rem(options?: IRollupPluginPx2RemOptions): any
export declare function setHtmlFontSize(designWidth?: number): void
