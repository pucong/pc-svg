import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import i18n from './i18n'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

// i18n.locale = 'en'
// var html = template.getTemplate()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
