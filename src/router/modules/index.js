// import record from '@/router/modules/record'

export const constantRoutes = [
  {
    path: '/',
    redirect: '/record'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue')
  },
{
    path: '/test',
    component: () => import('@/views/test/index.vue')
}
]

export const asyncRoutes = [
  {
    path: '/*',
    redirect: '/404'
  }
]

export default [...constantRoutes, ...asyncRoutes]
