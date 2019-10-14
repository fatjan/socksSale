<template>
  <div class="container">
    <p>Hello {{ name }}!</p>
    <NuxtLink to="/about">Go to /about</NuxtLink>
  </div>
</template>

<script>
export default {
  asyncData() {
    return new Promise((resolve) => {
      resolve({ name: 'world' })
    })
  },
  head: {
    title: 'Home page'
  }
}
</script>

<style scoped>
.container {
  font-size: 20px;
  text-align: center;
  padding-top: 100px;
}
</style>
