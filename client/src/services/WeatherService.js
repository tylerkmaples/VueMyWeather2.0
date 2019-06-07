import Api from '@/services/Api'

export default {
  getWeather (params) {
    return Api().get(`?zip=${params.location},us&units=imperial&appid=d130ff34b8fd1e2aea6c419d45ae02c8`)
  }
}
