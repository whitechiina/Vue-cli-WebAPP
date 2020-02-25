import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/list.vue';
import detail from '../views/detail.vue';
import room from '../views/room.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import ('../views/index')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import ('../views/list')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import ('../views/detail.vue')
  },
  {
    path: '/room',
    name: 'room',
    component: () => import ('../views/room.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
