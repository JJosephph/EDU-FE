import request from '@/utils/request'

export default {
    //获取首页老师和课程信息
    getFrontInfo() {
        return request({
            url: '/eduservice/front/getFrontInfo',
            method: 'get'
        })
    }
}