# vite-plugin-rpx2rem

A Vite plugin for converts rpx to rem

## Install

```shell
$ npm install vite-plugin-rpx2rem --save-dev
```

## Usage

Write CSS style in rpx units

### setp 1. setHtmlFontSize

setHtmlFontSize in your entry file, and pass the design width of your project

```tsx
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.less'
import { setHtmlFontSize } from 'vite-plugin-rpx2rem'

setHtmlFontSize(750) // 750 is the design width of your project

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
```

### setp 2. vite.config.ts

Note that it should be placed on top of other plugins, so that it occurs before Babel compilation

```ts
import rpx2rem from 'vite-plugin-rpx2rem'

const config = {
  plugins: [
    rpx2rem({
      include: [path.resolve(__dirname, 'src')],
    }), // 这个要放在 react() 前面
    react(),
  ],
}
```

### setp 3. write css style in rpx units

```css
/* css */
.test_size {
  box-sizing: border-box;
  border: 1rpx solid red;
  margin: 20rpx;
  height: 100rpx;
}
```

```tsx
// tsx
const Dom = (
  <div
    className={styles.test_size}
    style={{
      fontSize: '20rpx',
    }}
  >
    test px rem
  </div>
)
```

## Options

| property | 说明 | 类型                   | 默认值 |
| -------- | ---- | ---------------------- | ------ |
| include  |      | `(RegExp \| string)[]` | -      |
| exclude  |      | `(RegExp \| string)[]` | -      |

## Remark

maybe you need set body font-size after setHtmlFontSize() in your entry file
