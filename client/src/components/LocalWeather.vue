<template>
  <b-container fluid>
    <b-container class="bv-example-row">
      <b-row>
          <h2>{{ name }}</h2>
          <h3>{{ temp }}&#176;F</h3>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>

export default {
  name: 'localWeather',
  data () {
    return {
      name: '',
      temp: ''
    }
  },
  beforeMount () {
    let pulledData = this.$store.state.currentWeather[0]
    this.name = pulledData.name
    this.temp = pulledData.main.temp
    console.log(pulledData)
  },
  methods: {}
}
</script>
