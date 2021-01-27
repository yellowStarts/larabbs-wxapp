import { request, authRequest, uploadFile } from '@/utils/request'

export function getCurrentUser(data) {
  return authRequest('user')
}

export function updateUser(data) {
  return authRequest('user', {
    method: 'put',
    data: data
  })
}

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
