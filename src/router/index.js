import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ComputedDemo from '@/components/ComputedDemo'
import Login from '@/components/auth/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/computeddemo',
      name: 'ComputedDemo',
      component: ComputedDemo
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login
    }
  ]
})
