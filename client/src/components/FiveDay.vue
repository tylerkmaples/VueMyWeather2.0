<template>
  <div class="container">
      <b-row center>
          <b-col md="2" offset-md="1">
            <!-- The title will be the day and picture will be the png -->
            <b-card title="card title" img-src="" img-alt="Image" img-top tag="article" class="mb-2">
              <!-- The text will be the temp for that day -->
              <b-card-text>
                <h1>{{ day1 }}</h1>
                {{ temp1 }}&#176;F
              </b-card-text>
            </b-card>
          </b-col>
          <b-col md="2">
            <!-- The title will be the day and picture will be the png -->
            <b-card title="card title" img-src="" img-alt="Image" img-top tag="article" class="mb-2">
              <!-- The text will be the temp for that day -->
              <b-card-text>
                {{ temp2 }}&#176;F
              </b-card-text>
            </b-card>
          </b-col>
          <b-col md="2">
            <!-- The title will be the day and picture will be the png -->
            <b-card title="card title" img-src="" img-alt="Image" img-top tag="article" class="mb-2">
              <!-- The text will be the temp for that day -->
              <b-card-text>
                {{ temp3 }}&#176;F
              </b-card-text>
            </b-card>
          </b-col>
          <b-col md="2">
            <!-- The title will be the day and picture will be the png -->
            <b-card title="card title" img-src="" img-alt="Image" img-top tag="article" class="mb-2">
              <!-- The text will be the temp for that day -->
              <b-card-text>
                {{ temp4 }}&#176;F
              </b-card-text>
            </b-card>
          </b-col>
          <b-col md="2">
            <!-- The title will be the day and picture will be the png -->
            <b-card title="card title" img-src="" img-alt="Image" img-top tag="article" class="mb-2">
              <!-- The text will be the temp for that day -->
              <b-card-text>
                {{ temp5 }}&#176;F
              </b-card-text>
            </b-card>
          </b-col>
      </b-row>
  </div>
</template>
<script>
export default {
  name: 'FiveDay',
  data () {
    return {
      day1: '',
      day2: '',
      day3: '',
      day4: '',
      day5: '',
      temp1: '',
      temp2: '',
      temp3: '',
      temp4: '',
      temp5: ''
    }
  },
  beforeMount() {
    let pulledForecast = this.$store.state.currentForecast[0]
    this.day1 = pulledForecast.list[1].dt_txt
    this.day2 = pulledForecast.list[2].dt_txt
    this.day3 = pulledForecast.list[3].dt_txt
    this.day4 = pulledForecast.list[4].dt_txt
    this.day5 = pulledForecast.list[5].dt_txt
    this.temp1 = pulledForecast.list[1].main.temp
    this.temp2 = pulledForecast.list[2].main.temp
    this.temp3 = pulledForecast.list[3].main.temp
    this.temp4 = pulledForecast.list[4].main.temp
    this.temp5 = pulledForecast.list[5].main.temp
      
  },
}
</script>
