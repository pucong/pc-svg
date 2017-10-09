var pathName = window.document.location.pathname
var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1)

export const CTX = projectName // 域名
export const CTX_API_JAVA = 'http://localhost:8080' // 跨域地址

