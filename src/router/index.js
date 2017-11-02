import Vue from 'vue'
import Router from 'vue-router'
import shelf from '@/components/shelf'
import stacks from '@/components/stacks'
import userinfo from '@/components/userinfo'
import bookinfo from '@/components/bookinfo'
import login from '@/components/login'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shelf',
      component: shelf
    },
    {
      path: '/shelf',
      name: 'shelf',
      component: shelf
    },
    {
      path: '/stacks',
      name: 'stacks',
      component: stacks
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: userinfo
    },
    {
      path: '/bookinfo',
      name: 'bookinfo',
      component: bookinfo
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
