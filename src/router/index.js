import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: 'demo1',
      component: () => import('@/components/main'),
      children: [
        // 维修中心
        {path: 'demo1', name: 'demo1', component: () => import('@/components/repair/demo1')},
        {path: 'demo2', name: 'demo2', component: () => import('@/components/repair/demo2')},
        {path: 'demo3', name: 'demo3', component: () => import('@/components/repair/demo3')},
        // 维修中心
        {path: 'demo4', name: 'demo1', component: () => import('@/components/warehouse/demo1')},
        {path: 'demo5', name: 'demo2', component: () => import('@/components/warehouse/demo2')},
        {path: 'demo', name: 'demo', component: () => import('@/components/demo')}
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
