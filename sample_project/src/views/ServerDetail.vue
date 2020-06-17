<template>
  <div>
    <h1>Server detail: {{ $route.params.server_id }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'ServerDetail',
    mounted () {
      console.log('router', this.$route.params)
    }
  }
</script>

<style scoped>

</style>
