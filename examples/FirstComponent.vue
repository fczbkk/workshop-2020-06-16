<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>{{ serversList }}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isLoading: false,
        serversList: []
      }
    },
    created () {
      console.log('created')
    },
    mounted () {
      console.log('mounted')
      this.isLoading = true
      fetch('http://moje.data.cz/servers/list')
        .then((response) => response.json())
        .then((data) => this.serversList = data)
        .finally(() => this.isLoading = false)
    },
    updated () {
      console.log('updated')
    },
    destroyed () {
      console.log('destroyed')
    }
  }
</script>

<style scoped>

</style>
