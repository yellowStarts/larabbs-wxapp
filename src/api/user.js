import { request, authRequest, uploadFile } from '@/utils/request'

// 获取当前用户信息
export function getCurrentUser(data) {
  return authRequest('user')
}

// 更新用户信息
export function updateUser(data) {
  return authRequest('user', {
    method: 'put',
    data: data
  })
}

// 更新头像
export function updateAvatar(avatar) {
  return uploadFile('images', {
    method: 'post',
    name: 'image',
    formData: {
      type: 'avatar'
    },
    filePath: avatar
  })
}

// 获取用户信息
export function getUser(id) {
  return request('users/'+id)
}

// 获取权限
export function getPerms() {
  return authRequest('user/permissions')
}
