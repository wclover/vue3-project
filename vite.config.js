import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
    base: '/',
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            //remove i18n waring
            'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
        }
        // why remove it , look for https://github.com/vitejs/vite/issues/6026
        // extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs']
    },
})
