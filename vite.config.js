import {
    defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import {
    resolve
} from 'path'

export default defineConfig({
    plugins: [vue()],
    base: '/',
    //启动服务配置
    server: {
        host: '0.0.0.0',
        port: 8000,
        open: true,
        https: false,
        proxy: {}
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
})