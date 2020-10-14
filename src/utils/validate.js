/**
 * 用户名验证
 * @param {*} rule 验证规则(不含特殊字符)
 * @param {*} value 需要验证的用户名
 * @param {*} callback 回调函数
 */
export const validateUsername = (rule, value, callback) => {
  var reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]{1,16}$/
  if (value.length > 16) {
    callback(new Error('长度不能超过16个字符'))
  } else if (!reg.test(value)) {
    callback(new Error('仅支持大小写英文、中文和下划线'))
  } else {
    callback()
  }
}

/**
 * 密码验证
 * @param {*} rule 密码验证规则
 * @param {*} value 密码
 * @param {*} callback 回调函数
 */
export const validatePassword = (rule, value, callback) => {
//   var reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]{1,16}$/
  if (value.length > 16) {
    callback(new Error('密码长度不能超过16个字符'))
  } else if (value.length < 6) {
    callback(new Error('密码长度不能少于6个字符'))
  } else {
    callback()
  }
}

/**
 * 手机号验证
 * @param {*} rule 验证规则
 * @param {*} value 手机号
 * @param {*} callback 回调函数
 */
export const validatePhone = (rule, value, callback) => {
  var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
  if (!reg.test(value)) {
    callback(new Error('手机号格式错误'))
  } else {
    callback()
  }
}
