import Layout from '@/layout/index.vue'

export default {
  path: '/table',
  name: 'Table',
  component: Layout,
  redirect: '/table/index',
  meta: {title: '表格中心', icon: 'el-icon-menu'},
  children: [
    {
      path: 'index',
      name: 'TableIndex',
      component: () => import('@/views/TableIndex/index.vue'),
      meta: {title: '表格', icon: 'el-icon-location'},
      children: [
        {
          path: 'xxx',
          name: 'XXX',
          component: () => import('@/views/TableChild/index.vue'),
          meta: {title: '表格XX', icon: 'el-icon-location'}
        }
      ]
    }
  ]
}
