// import superagent from 'superagent'

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
  // 根据勾股定理计算
  GouGuFunction: function (opt) {
    var one = opt.one
    var two = opt.two
    var three = opt.three
    if (one === '' || two === '') {
    } else if (three === '') {
    }
    return opt
  }
}
