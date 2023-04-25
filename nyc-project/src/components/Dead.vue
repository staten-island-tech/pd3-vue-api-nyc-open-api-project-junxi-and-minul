<template>
  <div class="card">
    <h2>{{ death.name }}</h2>
    <h3>{{ id }}</h3>
  </div>
</template>

<script setup>
const props = {
  death: Object,
  id: Number
}
</script>

<style scoped></style>
