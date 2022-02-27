import Layout from '@/layout/index.vue'

export default {
  path: '/record',
  name: 'Record',
  component: Layout,
  redirect: '/record/index',
  meta: {title: '记录中心', icon: 'el-icon-menu'},
  children: [
    {
      path: 'index',
      name: 'RecordIndex',
      component: () => import('@/views/RecordIndex/index.vue'),
      meta: {title: '记录', icon: 'el-icon-location'}
    }
  ]
}
