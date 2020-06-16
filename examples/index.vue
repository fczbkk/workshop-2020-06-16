<template>
  <div class="wrapper">
    <FullNameEditor v-bind:full-name="fullName" />
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
    }
  }
</script>

<style scoped>
</style>
