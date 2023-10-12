const defaultOptions = {
    exclude: [/node_modules/],
};
function rpx2rem(options) {
    const include = (options?.include || []);
    const exclude = (options?.exclude || defaultOptions.exclude);
    // console.log('🚀 ~ include', include)
    // console.log('🚀 ~ exclude', exclude)
    return {
        name: 'rollup-plugin-px2rem',
        // if cli is vite, this hook will not be called, because vite has its own resolve plugin
        // resolveId(source: string, importer: string | undefined) {
        //   return source
        // },
        transform(code, id) {
            // 1. judge include and exclude
            if (include.some((t) => _match(t, id)) && //
                !exclude.some((t) => _match(t, id))) {
                // next. replace
                return handleReplace(code);
            }
            return code;
        },
        // vite plugin hooks
        enforce: 'pre',
    };
}
function setHtmlFontSize(designWidth = 750) {
    const width = (document.body && document.body.clientWidth) || (document.documentElement && document.documentElement.clientWidth) || (window.screen && window.screen.availWidth);
    // document.getElementsByTagName('html')[0].style.fontSize = (width / designWidth) * 100 + 'px'
    document.getElementsByTagName('html')[0].style.fontSize = width / designWidth + 'px';
}
function _match(t, id) {
    if (typeof t === 'string') {
        return id.includes(t);
    }
    else {
        return t.test(id);
    }
}
function handleReplace(code) {
    // all rpx to rem
    return code.replace(/rpx/g, 'rem');
}

export { rpx2rem as default, defaultOptions, setHtmlFontSize };
