import request from '@/utils/request'

export default {
    //生成订单
  createOrders(courseId) {
    return request({
      url: '/orderservice/eduorder/createOrder/'+courseId,
      method: 'post'
    })
  },
  //根据订单id查询订单信息
  getOrdersInfo(id) {
    return request({
      url: '/orderservice/eduorder/getOrderInfo/'+id,
      method: 'get'
    })
  },
  //生成二维码的方法
  createNatvie(orderNo) {
    return request({
      url: '/orderservice/edupay/createNative/'+orderNo,
      method: 'get'
    })
  },

  //查询订单状态的方法
  //生成二维码的方法
  queryPayStatus(orderNo) {
    return request({
      url: '/orderservice/edupay/queryPayStatus/'+orderNo,
      method: 'get'
    })
  }
}