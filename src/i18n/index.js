import Vue from 'vue'
import VueI18n from 'vue-i18n'
// var path = require('path')

var cn = require('../language/language-CN.json')

Vue.use(VueI18n)
// 语言包
const messages = {
  en: {
    login: {
      loginButton: 'englishButton'
    }
  },
  zh: cn
}
export default new VueI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  messages
})
