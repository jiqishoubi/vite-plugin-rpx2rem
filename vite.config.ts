import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import rpx2rem from './vite-plugin-rpx2rem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    rpx2rem({
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
    // BASE_HOST: JSON.stringify(BASE_HOST),
  },
})
