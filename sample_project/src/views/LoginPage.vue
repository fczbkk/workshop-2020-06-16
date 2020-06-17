<template>
  <div>
    <h1>Login</h1>
    <p>
      <button @click="login">Log me in</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'LoginPage',
    methods: {
      login () {
        sessionStorage.setItem('userLoggedIn', '1')
      }
    }
  }
</script>

<style scoped>

</style>
