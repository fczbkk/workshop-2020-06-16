<template>
  <div>
    <p>
      <input type="text" v-model="firstName">
    </p>
    <p>
      <input type="text" v-model="lastName">
    </p>

    <p>
      <button @click="updateFullName()">Click me</button>
    </p>

  </div>
</template>

<script>
  export default {
    data () {
      return this.parseFullName()
    },
    props: {
      value: {
        type: String,
        required: false,
        default: 'John Doe'
      }
    },
    watch: {
      value () {
        // Object.assign(this, this.parseFullName())

        const {firstName, lastName} = this.parseFullName()
        this.firstName = firstName
        this.lastName = lastName
      },
      joinedFullName () {
        this.updateFullName()
      }
    },
    computed: {
      /**
       * Joined first name and last name.
       * @returns {string}
       */
      joinedFullName () {
        return [this.firstName, this.lastName]
          .filter((item) => item !== '')
          .join(' ')
      }
    },
    methods: {
      parseFullName () {
        const [firstName = '', lastName = ''] = this.value.split(' ')
        return {
          firstName,
          lastName
        }
      },
      updateFullName () {
        this.$emit('input', this.joinedFullName)
      }
    }
  }
</script>

<style scoped>

</style>
