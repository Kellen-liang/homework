import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: ()=>import('../view/Layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: ()=>import('../view/Home'),
      }
    ]
  }
]

export default  createRouter({
  history: createWebHashHistory(),
  routes
})