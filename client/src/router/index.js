import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import LocalWeather from '@/components/LocalWeather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/local',
      name: 'localWeather',
      component: LocalWeather
    }
  ]
})
