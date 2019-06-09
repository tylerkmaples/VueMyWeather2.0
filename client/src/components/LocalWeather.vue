<template>
  <b-container fluid align-v="center" style="margin-top: 200px">
    <b-container class="bv-example-row">
      <!-- This row will hold the name of the city -->
      <b-row>
          <b-col sm="12">
              <h1>{{ name }}</h1>
          </b-col>
      </b-row>
      <!-- This row will hold the temperature -->
      <b-row>
          <b-col sm="12">
              <h3>Current Temperature</h3>
              <hr>
             <h1>{{ temp }}&#176;F</h1>
          </b-col>
      </b-row>
      <!-- This row will hold the condition -->
      <b-row>
        <b-col sm="12">
            <h4>{{ condition }}</h4>
        </b-col>
      </b-row>
      <!-- This row will hold the min and max for the day -->
      <b-row>
        <b-col sm="6">
            <h4>Max Temp: {{ max_temp }}&#176;F</h4>
        </b-col>
        <b-col sm="6">
            <h4>Min Temp: {{ min_temp }}&#176;F</h4>
        </b-col>
      </b-row>
      <FiveDay />
    </b-container>
  </b-container>
</template>

<script>
// import FiveDay from './FiveDay'

export default {
  name: 'localWeather',
  //   components: {
  //     FiveDay
  //   },
  data () {
    return {
      name: '',
      temp: '',
      condition: '',
      sunrise: '',
      sunset: '',
      max_temp: '',
      min_temp: ''
    }
  },
  beforeMount () {
    let pulledData = this.$store.state.currentWeather[0]
    this.name = pulledData.name
    this.temp = pulledData.main.temp
    this.condition = pulledData.weather[0].description
    this.sunrise = pulledData.sys.sunrise
    this.sunset = pulledData.sys.sunset
    this.max_temp = pulledData.main.temp_max
    this.min_temp = pulledData.main.temp_min
    console.log(pulledData)
  },
  methods: {}
}
</script>
