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
          <b-form @submit="onSubmit" v-if="show">

            <b-form-group id="input-group-1" label="Zip Code:" label-for="input1">
              <b-form-input id="input1" v-model="form.zip" type="text" required placeholder="Enter zip code"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="City Name:" label-for="input-2">
              <b-form-input id="input-2" v-model="form.city" required placeholder="Enter City"></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>

          </b-form>

        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomePage',
  data () {
    return {
      form: {
        zip: '',
        city: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      // const route = {
      //   name: 'localWeather'
      // }
      // alert(JSON.stringify(this.form))
      axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${this.form.zip},us&appid=d130ff34b8fd1e2aea6c419d45ae02c8`)
        .then(response => {
          console.log(response.data)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
