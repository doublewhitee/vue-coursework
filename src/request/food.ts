import { request } from "./request"

export function getFoodInfo(keyword: string, page: number, category?: string) {
  return request({
    url: '/food/info',
    params: { keyword, page, category }
  })
}