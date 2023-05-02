<script>
import PieChart from '../components/pieChart.vue'
export default {
  mounted() {
    this.PieCharts()
  },
  name: 'pieChart',
  components: { PieChart },
  data() {
    return {
      chartData: {
        labels: ["Alzheimer's Disease", 'Viral Hepatitis', 'Septicemia'],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true,
        backgroundColor: ['#0000FF', '#FF0000', '#00FF00']
      },
      retrievedData: false
    }
  },
  methods: {
    PieCharts: async function getCauses() {
      let res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
      let data = await res.json()
      console.log(data)
      const array = data.filter((person) => person.leading_cause === "Alzheimer's Disease (G30)")
      const array2 = data.filter((person) => person.leading_cause === 'Viral Hepatitis (B15-B19)')
      const array3 = data.filter((person) => person.leading_cause === 'Septicemia (A40-A41)')
      this.chartData.datasets[0].data.push(array.length)
      this.retrievedData = true
      this.chartData.datasets[0].data.push(array2.length)
      this.retrievedData = true
      this.chartData.datasets[0].data.push(array3.length)
      this.retrievedData = true
    }
  }
}
</script>

<template>
  <div>
    <h5>Click on labels to get remove from chart</h5>
    <PieChart
      class="chart"
      v-if="retrievedData"
      :chartData="chartData"
      :chartOptions="chartOptions"
    />
  </div>
</template>
