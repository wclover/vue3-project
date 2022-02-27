import { createRouter, createWebHashHistory } from 'vue-router'
import {asyncRoutes, constantRoutes} from './modules/index'

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes: [...constantRoutes, ...asyncRoutes]
})

export default router
