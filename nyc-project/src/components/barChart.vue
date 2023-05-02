<template>
  <div>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(Tooltip, Legend, ArcElement)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      retrievedData: false
    }
  }
}
</script>
