import superagent from 'superagent'

var types = require('@/store/types')

export default {
  async ajaxPost (opt) {
    var url = opt.url
    var params = opt.params

    superagent('POST', types.CTX_API_JAVA + url) // 这里的URL也可以是绝对路径
      .type('application/json')
      // .type('form')//表单提交
      .send(params)
      .end(function (req, res) {
        console.log(req, res)
      })
  },
  async ajaxGet (opt) {
    var url = opt.url
    var params = opt.params

    superagent('GET', types.CTX_API_JAVA + url) // 这里的URL也可以是绝对路径
      .type('application/json')
      .query(params)// 参数
      .end(function (req, res) {
        console.log(req, res)
      })
  },
  ajaxFrom (opt) {
    var url = opt.url
    var params = opt.params

    // return new Promise(function (resolve, reject) {
    superagent.post(types.CTX_API_JAVA + url) // 这里的URL也可以是绝对路径
      .set('Access-Control-Allow-Origin', '*')// 设置请求头来源
      .set('Access-Control-Allow-Headers', 'X-Requested-With')// 设置请求头
      .set('dataType', 'jsonp')// 设置请求头
      .set('Content-Type', 'application/json')
    //   .type('form')// 表单提交
      .send(params)
      .end(function (req, res) {
        debugger
        console.log(res)
        // if (res.statusCode === 200) {
        //   resolve({status: true, res: res.body})
        // } else {
        //   resolve({status: false, res: res})
        // }
      })
    // })
  }
}
