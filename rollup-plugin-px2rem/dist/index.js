const defaultOptions = {
    exclude: [/node_modules/],
};
function rollupPluginPx2Rem(options) {
    const test = (() => {
        const defaultTest = [/\.css$/, /\.less$/, /\.scss$/, /\.jsx$/, /\.tsx$/]; // these are must be included
        if (options?.additionalTest) {
            return [...defaultTest, ...options.additionalTest];
        }
        else {
            return defaultTest;
        }
    })();
    const include = (options?.include || []);
    const exclude = (options?.exclude || defaultOptions.exclude);
    // console.log('🚀 ~ test', test)
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
                // 2. judge test,file type
                if (test.some((t) => t.test(id))) {
                    // 3. replace
                    return handleReplace(code, id);
                }
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
function handleReplace(code, id) {
    // css less scss
    if (id.endsWith('.css') || id.endsWith('.less') || id.endsWith('.scss')) {
        const code2 = code.replace(/(\d+)px/g, '$1rem');
        return code2;
    }
    // jsx tsx
    else if (id.endsWith('.jsx') || id.endsWith('.tsx')) {
        console.log('🚀 ~ id', id);
        console.log('🚀 ~ code', code);
        // return this.content
    }
    // js ts
    // todo...
    // default
    return code;
}

export { rollupPluginPx2Rem as default, defaultOptions, setHtmlFontSize };
