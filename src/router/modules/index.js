import record from '@/router/modules/record'
import table from '@/router/modules/table'

export const constantRoutes = [
  {
    path: '/',
    name: 'AppIndex',
    redirect: '/record'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/404/index.vue')
  },
{
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test/index.vue')
}
]

export const asyncRoutes = [
   record,
   table,
  {
    path: '/*',
    name: 'NotMatch',
    redirect: '/404'
  }
]

export default [...constantRoutes, ...asyncRoutes]
