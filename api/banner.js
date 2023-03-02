import request from '@/utils/request'

export default {
    //获取横幅banner
    getListBanner() {
        return request({
            url: '/frontservice/front/getBanner',
            method: 'get'
        })
    }
}