<template>
  <div>hello
    <span>{{name}}</span>
    <canvas id="chartContainer"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js'
  import $ from 'jquery'

  export default {
    name: 'chart',
    data: {
      name: 'chart demo',
      chart: null
    },
    mounted() {
      let ctx = $('#chartContainer')
      let data = {
        labels: ['golang', 'python', 'benjamin', 'wendy', 'hijack', 'carl', 'lua', 'IO', 'Java'],
        datasets: [{
          label: 'JQuery',
          pointRadius: 2,
          lineTension: 0,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          data: [0, 0, 123, 120, 56, 59, 23, 1, 65]
        }, {
          label: 'JQuery',
          pointRadius: 2,
          lineTension: 0,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          data: [0, 10, 23, 10, 56, 59, 23, 12, 65]
        }]
      }
      let options = {
        scales: {yAxes: [{ticks: {beginAtZero: true}}]},
        legend: {display: false},
        title: {
          display: true,
          text: ['Chart demo', 'Description'],
          lineHeight: 1.5,
          padding: 30,
          fontColor: '#ef3e69',
          fontStyle: 'bold',
          fontFamily: 'sans-serif',
          fontSize: 20
        },
        tooltips: {
          mode: 'dataset',
          callbacks: {
            beforeLabel(item, data) {
              return 'before '
            },
            afterLabel(item, data) {
              return 'after'
            },
            label(item, data) {
              let value = data.datasets[item.datasetIndex].data[item.index]
              return `Bandwidth: ${value} KB`
            },
            labelTextColor(tooltipItem, chart) {
              return '#543453'
            },
            title(item, data) {
              console.log(item, data)
              return `${item[0].xLabel} 2018-01-01`
            },
            footer(items, data) {
              return 'footer'
            }
          }
        }
      }
      this.chart = new Chart(ctx, {
        type: 'line',
        data,
        options
      })
    }
  }
</script>
