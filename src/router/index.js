import Vue from 'vue'
import Router from 'vue-router'
import login from '@/app/login'
// import hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
