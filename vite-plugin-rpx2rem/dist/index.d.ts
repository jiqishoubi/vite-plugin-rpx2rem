/**
 * @example
 * {
 *  include: [path.resolve(__dirname, 'src')],
 *  exclude: [/node_modules/], // default value is [/node_modules/]
 * }
 */
export interface IRpx2RemOptions {
    include?: (RegExp | string)[];
    exclude?: (RegExp | string)[];
}
export declare const defaultOptions: IRpx2RemOptions;
export default function rpx2rem(options?: IRpx2RemOptions): any;
export declare function setHtmlFontSize(designWidth?: number): void;
