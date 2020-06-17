<template>
  <div>
    <h1>Logout</h1>
    <p>
      <button @click="logout">Let me out</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "LogoutPage",
  methods: {
    logout () {
      sessionStorage.removeItem('userLoggedIn')
    }
  }
}
</script>

<style scoped>

</style>
