/*
 * @Descripttion: 
 * @version: 
 * @Author: liqi
 * @Date: 2021-04-23 23:53:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-23 23:56:07
 */
export const isSucc = (res) => {
  /* if(res.data.code = '10004'){
    vm.$router.push({
      name: 'login'
    })
    return
  } */
  return res.data != null && res.data.code === '0'
}

/**
 * 错误信息
 * @param {*} msg
 */
 export const errMsg = (vm, res, msg) => {
  if (typeof res === 'string') {
    vm.$Message.error(res)
  } else {
    if (res.data) {
      if (res.data.code === '10004') {
        vm.$router.push({
          name: 'login'
        })
        return
      }
      vm.$Message.error(res.data.msg)
    } else if (res.msg) {
      if (res.code === '10004') {
        vm.$router.push({
          name: 'login'
        })
        return
      }
      vm.$Message.error(res.msg)
    } else {
      vm.$Message.error(msg)
    }
  }
}

/**
 * 日期比较
 * @param {*} s1
 * @param {*} s2
 */
 export const compareDate = (s1, s2) => {
  return (new Date(s1.replace(/-/g, '/'))).getTime() - (new Date(s2.replace(/-/g, '/'))).getTime()
}


export const formatDate = (date, format) => {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(format)) { format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)) }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) { format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  }
  return format
}