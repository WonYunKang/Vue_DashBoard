



import { PolarArea } from 'vue-chartjs'

export default {
  extends: PolarArea,
  mounted () {
    this.renderChart({
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(179,181,198,0.2)',
          pointBackgroundColor: '#D2FFD2',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#D2FFD2',
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          pointBackgroundColor: '#D2FFD2',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#D2FFD2',
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}