// vite2.9.x
// import {createVuePlugin} from 'vite-plugin-vue2'
import path from 'path'
import {defineConfig} from "vite";
import vue from '@vitejs/plugin-vue2';
// vite3.2.0+vue2.7+element-ui2.15.10
export default defineConfig({
    server: {
        host: '0.0.0.0', //或者"dev": "vite --host 0.0.0.0", "build": "vite build", "serve": "vite preview --host 0.0.0.0"
        port: 80  // 设置为你想要的端口号，例如4000
    },
    base: '/',
    plugins: [
        // createVuePlugin(),
        vue()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),  // 设置 "@" 路径别名为 "src" 目录
            '~': path.resolve(__dirname, './'),
            'public': path.resolve(__dirname, 'public')
        }
    }
});