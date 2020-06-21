import request from './request'
const prefix = '/api'
function getDetail(id) {
    return request({
      url: prefix + '/goods/detail',
      method: 'get',
      params:{
          id
      }
    })
  }

export { getDetail }
