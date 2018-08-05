<template>
  <div class='chart'>
    <!-- import font awesome for legend icons -->
    <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'>
    <chart-axis :data='chartData'></chart-axis>
  </div>
</template>

<script>
  import { svgArea, svgLine, svgScatter } from 'd2b'
  import { ChartAxis } from 'vue-d2b'

  export default {
    data () {
      return {
        chartData: {
          sets: [
            {
              generators: [svgArea(), svgLine(), svgScatter()],
              graphs: [
                {
                  label: 'area 1',
                  values: [
                    {x: 1, y: 8},
                    {x: 2, y: 2},
                    {x: 3, y: 10},
                    {x: 4, y: 15},
                    {x: 5, y: 11},
                    {x: 6, y: 8},
                    {x: 7, y: 30},
                    {x: 8, y: 11},
                    {x: 9, y: 3}
                  ]
                },
                {
                  label: 'area 2',
                  values: [
                    {x: 1, y: 0},
                    {x: 2, y: 2},
                    {x: 3, y: 3},
                    {x: 4, y: 1},
                    {x: 5, y: 5},
                    {x: 6, y: 3},
                    {x: 7, y: 0},
                    {x: 8, y: 8},
                    {x: 9, y: 0}
                  ]
                }
              ]
            }
          ]
        }
      }
    },

    components: {
      ChartAxis
    }
  }
</script>

<style scoped>
  .chart{
    width: 100%;
    height: 190px;
  }
</style>