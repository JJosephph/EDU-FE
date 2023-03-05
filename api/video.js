import request from '@/utils/request'
export default {
    getPlayAuth(vid) {
        return request({
            url: `/videoservice/getPlayAuth/${vid}`,
            method: 'get'
        })
    }

}