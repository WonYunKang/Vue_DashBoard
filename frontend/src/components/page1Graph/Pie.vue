<template>
  <div class='chart'>
    <!-- import font awesome for legend icons -->
    <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'>
    <chart-pie :data='chartData' :config='chartConfig'></chart-pie>
  </div>
</template>

<script>
  import { ChartPie } from 'vue-d2b'

  export default {
    data () {
      return {
        chartData: [
          {label: 'arc 1', value: 23},
          {label: 'arc 2', value: 31},
          {label: 'arc 3', value: 80},
          {label: 'arc 4', value: 8}
        ],

        chartConfig (chart) {
          chart.donutRatio(0.5)
        }
      }
    },

    components: {
      ChartPie
    }
  }
</script>

<style scoped>
  .chart{
    width: 100%;
    height: 150px;
  }
</style>