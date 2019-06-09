import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      currentWeather: [],
      currentForecast: []
    },
    mutations: {
      addWeather (state, weather) {
        state.currentWeather.unshift(weather)
        console.log(state.currentWeather)
      },
      addForecast (state, forecast) {
        state.currentForecast.unshift(forecast)
        console.log(state.currentForecast)
      }
    }
  }
)
