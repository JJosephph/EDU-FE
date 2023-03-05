import request from '@/utils/request'

export default {
  //根据手机号发验证码
  sendCode(phone) {
    return request({
      url: `/msgservice/sendMsg/${phone}`,
      method: 'post'
    })
  },

  //注册的方法
  registerMember(formItem) {
    return request({
      url: `/userservice/user/register`,
      method: 'post',
      data: formItem
    })
  },
  //登录的方法
  submitLoginUser(userInfo) {
    return request({
      url: `/userservice/user/login`,
      method: 'post',
      data: userInfo
    })
  },
  //根据token获取用户信息
  getLoginUserInfo() {
    return request({
      url: `/userservice/user/getMemberInfo`,
      method: 'get'
    })
  }

}