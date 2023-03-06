import request from '@/utils/request'

export default {
    //获取评论
    getCommentByCourseId(page,limit,courseId) {
        return request({
            url: `/eduservice/educomment/getComment/${page}/${limit}/${courseId}`,
            method: 'get'
        })
    },
    addComment(comment) {
        return request({
            url: '/eduservice/educomment/addComment',
            method: 'post',
            data: comment
        })
    }
}