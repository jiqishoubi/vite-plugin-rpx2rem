import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import rollupPluginPx2Rem from './rollup-plugin-px2rem'

// 这里设置请求域名
const BASE_HOST = (() => {
  if (process.env.NODE_ENV === 'development') {
    return 'https://tuikeapit.bld365.com'
  }
  return 'https://tuikeapi.bld365.com'
})()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    rollupPluginPx2Rem({
      include: [path.resolve(__dirname, 'src')],
    }), // 这个要放在 react() 前面
    react(),
  ],
  server: {
    port: 6001,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       javascriptEnabled: true, // 支持内联 JavaScript
  //     },
  //   },
  // },
  base: './',
  define: {
    global: 'window', // 为了修复 react-codemirror2 'global is not define'
    BASE_HOST: JSON.stringify(BASE_HOST),
  },
})
