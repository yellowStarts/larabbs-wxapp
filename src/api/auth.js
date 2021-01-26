import { request } from '@/utils/request'

export function login(data) {
  return request('wxapp/authorizations', {
    method: 'post',
    data: data
  })
}