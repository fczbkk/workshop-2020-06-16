<template>
  <div class="wrapper">
    <FullNameEditor v-model="fullName"/>
    <p>
      Parent editor:
      <input type="text" v-model="fullName">
    </p>
    <p>Full name: {{ fullName }}</p>
  </div>
</template>

<script>
  import FullNameEditor from './FullNameEditor.vue'

  export default {
    components: {
      FullNameEditor
    },
    data () {
      return {
        fullName: 'Riki Fridrich'
      }
    },
    methods: {
      handleNameChange (newFullName) {
        this.fullName = newFullName
      }
    }
  }
</script>

<style scoped>
</style>
