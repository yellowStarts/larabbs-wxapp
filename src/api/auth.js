import { request } from '@/utils/request'

// 登录
export function login(data) {
  return request('wxapp/authorizations', {
    method: 'post',
    data: data
  })
}

// 刷新 token
export function refresh(token) {
  return request('authorizations/current', {
    method: 'put',
    header: {
      'Authorization': 'Bearer ' + token
    }
  })
}

// 退出
export function logout(token) {
  return request('authorizations/current', {
    method: 'delete',
    header: {
      'Authorization': 'Bearer ' + token
    }
  })
}

// 获取图形验证码
export function getCaptcha(phone) {
  return request('captchas', {
    method: 'post',
    data: {
      phone: phone
    }
  })
}

// 手机验证码
export function getVerificationCode(key, code) {
  return request('verificationCodes', {
    method: 'post',
    data: {
      captcha_key: key,
      captcha_code: code
    }
  })
}

// 注册
export function register(data) {
  return request('wxapp/users', {
    method: 'post',
    data: data
  })
}
