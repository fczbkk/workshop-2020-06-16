<template>
  <div>
    <h1>Server detail: {{ $route.params.server_id }}</h1>

    <v-alert type="success" v-if="showSuccessMessage">
      I'm a success alert.
    </v-alert>

    <div v-if="isSubmitting">
      Please wait, submitting changes.
    </div>
    <form v-else>
      <input type="hidden" name="userKey" :value="userKey">
      <div>
        <v-text-field
          name="id"
          v-model="id"
          label="ID"
          required
        ></v-text-field>
        <v-text-field
          name="ip"
          v-model="ip"
          label="IP address"
          required
        ></v-text-field>
        <v-text-field
          name="host"
          v-model="host"
          label="Host"
          required
        ></v-text-field>
      </div>
      <div>
        <v-btn color="primary" @click="submitForm">
          Submit
        </v-btn>
      </div>
    </form>

    <v-snackbar
      v-model="showSuccessMessage"
      :timeout="3000"
    >
      Edit of server successful.
    </v-snackbar>

  </div>
</template>

<script>
  export default {
    name: 'ServerDetail',
    data () {
      return {
        isSubmitting: false,
        showSuccessMessage: false,
        userKey: sessionStorage.getItem('userLoggedIn'),
        id: 1,
        ip: '123.456.789',
        host: 'www.t-mobile.cz'
      }
    },
    methods: {
      submitForm () {
        console.log('submitting form', this.id, this.ip, this.host)
        this.isSubmitting = true
        setTimeout(() => {
          this.isSubmitting = false
          this.showSuccessMessage = true
        }, 3000)
      }
    },
    mounted () {
      console.log('router', this.$route.params)
    }
  }
</script>

<style scoped>

</style>
