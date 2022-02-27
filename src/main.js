import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import store from './store'
import router from './router'

import '@/styles/index.scss'

const app = createApp(App);

import * as Icons from '@element-plus/icons-vue'
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})

app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
