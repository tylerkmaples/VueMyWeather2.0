<template>
  <b-container fluid>
    <b-container class="bv-example-row">
      <b-row>
        <!-- Holds the main picture -->
        <b-col sm="12" >
          <img src="../assets/mainPic.png">
        </b-col>
        <!-- Holds the search bar -->
        <b-col sm="12">

          <!-- Form for input -->
          <b-form @submit="getWeather" v-if="show">

            <b-form-group id="input-group-1" label="Zip Code:" label-for="input1">
              <b-form-input id="input1" v-on:keydown.enter="getWeather" v-model="form.zip" type="text" required placeholder="Enter zip code"></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>

          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import WeatherService from '@/services/WeatherService'
export default {
  name: 'HomePage',
  data () {
    return {
      form: {
        zip: ''
      },
      show: true,
      localWeatherData: ''
    }
  },
  methods: {
    async getWeather (evt) {
      evt.preventDefault()
      if (this.form.zip.length !== 5) {
        alert('ntr zip pls')
        return false
      }
      const response = await WeatherService.getWeather({ location: this.form.zip })
      let dataResp = response.data
      this.localWeatherData = dataResp
      this.$store.commit('addWeather', this.localWeatherData)
      console.log(this.localWeatherData)
      this.$router.push({ name: 'localWeather' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
