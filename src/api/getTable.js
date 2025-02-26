import request from './request'

export const getAbsolueExpression = () => {
  return request({
    url: '/data/AE.json',
    method: 'get'
  })
}
export const getDifferentialExpression = () => {
  return request(
    {
      url: '/data/DE.json',
      method: 'get'
    })
}
