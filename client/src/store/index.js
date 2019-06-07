import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      currentWeather: []
    },
    mutations: {
      addWeather (state, weather) {
        state.currentWeather.unshift(weather)
        console.log(state.currentWeather)
      }
    }
  }
)
