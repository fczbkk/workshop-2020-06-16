<template>
  <div>
    {{ fullName }}
    <p>
      <input type="text" v-model="firstName">
    </p>
    <p>
      <input type="text" v-model="lastName">
    </p>
  </div>
</template>

<script>
  export default {
    data () {
      const [firstName, lastName] = this.fullName.split(' ')
      return {
        firstName,
        lastName
      }
    },
    props: {
      fullName: {
        type: String,
        required: false,
        default: 'John Doe'
      }
    }
  }
</script>

<style scoped>

</style>
