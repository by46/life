import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import ComputedDemo from '@/components/ComputedDemo.vue'
import Login from '@/components/auth/Login.vue'
import ChartDemo from '@/components/ChartDemo.vue'
import Portal from '@/pages/Portal.vue'
import Profile from '@/components/Profile.vue'
import Golang from '@/components/Golang.vue'
import Gin from '@/components/Gin.vue'
import Echo from '@/components/Echo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/portal',
      name: 'Portal',
      component: Portal,
      children: [{
        path: '',
        name: 'Hello',
        component: Hello
      }, {
        path: 'computed/demo',
        name: 'ComputedDemo',
        component: ComputedDemo
      }, {
        path: 'auth/login',
        name: 'login',
        component: Login
      }, {
        path: 'chart/demo',
        name: 'chart',
        component: ChartDemo
      }, {
        path: 'user/:username',
        name: 'profile',
        component: Profile
      }, {
        path: 'developer',
        name: 'developer',
        component: Golang,
        children: [{
          path: 'gin',
          component: Gin
        }, {
          path: 'echo',
          components: {
            default: Echo,
            a: Gin,
            b: Profile
          }
        }]
      }
      ]
    }
  ]
})
