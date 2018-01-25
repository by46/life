import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import ComputedDemo from '@/components/ComputedDemo.vue'
import Login from '@/components/auth/Login.vue'
import ChartDemo from '@/components/ChartDemo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/computed/demo',
      name: 'ComputedDemo',
      component: ComputedDemo
    }, {
      path: '/auth/login',
      name: 'login',
      component: Login
    }, {
      path: '/chart/demo',
      name: 'chart',
      component: ChartDemo
    }
  ]
})
