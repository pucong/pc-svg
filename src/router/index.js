import Vue from 'vue'
import Router from 'vue-router'
import index from '@/app/index'
// import hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
