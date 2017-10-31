// import superagent from 'superagent'
import $ from 'jquery'
// var types = require('@/store/types')

export default {
  // 生成唯一id
  getUuid: function (str) {
    return str + this.guid()
  },
  guid: function () {
    return this.getCode() + '_' + this.getCode() + '_' + this.getCode()
  },
  getCode: function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  },
  /*
  * 判断是否为空，null，undefined，返回false
  */
  isNotBlank: function (obj) {
    if (obj === '') {
      return false
    }
    if (obj === null) {
      return false
    }
    // 判断undefined、null与NaN:
    if (!obj) {
      return false
    }
    // 判断是否为方法、函数
    if ($.type(obj) === 'function') {
      return true
    }
    // 判断json是否为空
    if ($.type(obj) === 'object') {
      if ($.isEmptyObject(obj)) {
        return false
      }
    }
    return true
  },
  /*
   * 判断是否为空，null，undefined，返回true
   */
  isBlank: function (obj) {
    if (this.isNotBlank(obj)) {
      return false
    }
    return true
  },
  // 根据勾股定理计算
  gouGuFunction: function (opt) {
    let one = opt.one
    let two = opt.two
    let three = opt.three
    if (this.isBlank(one)) {
      one = this.gouGuFunctionOne(two, three)
      return one
    } else if (this.isBlank(two)) {
      two = this.gouGuFunctionOne(one, three)
      return two
    } else if (this.isBlank(three)) {
      three = this.gouGuFunctionTwo(one, two)
      return three
    }
  },
  /**
   * 勾股计算非斜边
   * @param opt
   */
  gouGuFunctionOne: function (one, three) {
    let two = Math.pow(three, 2) - Math.pow(one, 2)
    two = Math.sqrt(two)
    return Math.ceil(two)
  },
  /**
   * 勾股计算斜边
   * @param opt
   */
  gouGuFunctionTwo: function (one, two) {
    let three = Math.pow(one, 2) + Math.pow(two, 2)
    three = Math.sqrt(three)
    return Math.ceil(three)
  },
  /**
   * 知道斜边求直角
   * @param three
   * @returns {number}
   */
  gouGuFunctionThree: function (three) {
    let one = Math.pow(three, 2) / 2
    one = Math.sqrt(one)
    return Math.ceil(one)
  }
}
