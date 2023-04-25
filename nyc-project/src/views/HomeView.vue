<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const data = ref(``)
import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted } from 'vue'
const dat = ref(``)
async function getCauses() {
  let res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
  let data = await res.json()
  death.value = data.results
  console.log(data)
}
onMounted(() => {
  getCauses()
})
</script>

<style scoped></style>
