import { createRouter, createWebHashHistory } from 'vue-router'
import {asyncRoutes, constantRoutes} from './modules/index'
import permission from './permission'

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes: [...constantRoutes, ...asyncRoutes]
})
permission(router)

export default router
