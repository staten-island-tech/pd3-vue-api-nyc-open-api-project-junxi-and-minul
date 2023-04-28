<script>
export default {
  name: `PieChart`,
  components: { Doughnut },
  data() {
    return {
      chartData: null,
      chartOptions: null,
      loaded: false
    }
  },

  mounted: function () {
    let x = []
    this.chartData = {
      labels: [``],
      datasets: [{ backgroundColor: [`red`, `green`], data: this.x }]
    }
    this.chartOptions = {
      responsive: true
    }
    this.loaded = true
  }
}
</script>

<template></template>

<style></style>
