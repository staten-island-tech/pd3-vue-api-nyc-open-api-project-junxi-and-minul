<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
  <div>
    <h1 class="header">NYC Causes of Death</h1>
  </div>
  <nav>
    <RouterLink class="link-home" to="/">Home</RouterLink>
    <RouterLink class="link-pie" to="/pieView">Pie Chart</RouterLink>
    <RouterLink class="link-bar" to="/barView">Bar Chart</RouterLink>
  </nav>
  <RouterView></RouterView>
  </div>
</template>

<style scoped>
.header {
  font-size: 50px;
}
.link-home {
  margin: 10px;
}
.link-pie {
  margin: 10px;
}
.link-bar {
  margin: 10px;
}
</style>
