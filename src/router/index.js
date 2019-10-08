import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: 'projectList',
      component: () => import('@/components/main'),
      children: [
        {path: 'addproject', name: 'addproject', component: () => import('@/components/addproject')},
        {path: 'projectList', name: 'projectList', component: () => import('@/components/projectList')},
        {path: 'demo', name: 'demo', component: () => import('@/components/demo')}
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
