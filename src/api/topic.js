import { fromPairs } from "lodash";
import { request, authRequest } from '@/utils/request'

// 获取话题列表
export function getTopics(data) {
  return request('topics', {
    data: data
  })
}

// 获取分类
export function getCategories(data) {
  return request('categories')
}

// 获取话题详情
export function getTopic(id, data) {
  return request('topics/' + id, {
    data: data
  })
}

// 获取用户下的话题列表
export function getUserTopics(userId, data) {
  return request('users/'+userId+'/topics', {
    data: data
  })
}

// 删除
export function deleteTopic(id, data) {
  return authRequest('topics/' + id, {
    method: 'delete',
    data: data
  })
}
