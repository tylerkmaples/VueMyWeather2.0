import Api from '@/services/Api'

export default {
  getWeather (params) {
    return Api().get(`/weather?zip=${params.location},us&units=imperial&appid=d130ff34b8fd1e2aea6c419d45ae02c8`)
  },
  getForecast (params) {
    return Api().get(`/forecast?zip=${params.location},us&units=imperial&cnt=6&appid=d130ff34b8fd1e2aea6c419d45ae02c8`)
  }
}
