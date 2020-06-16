<template>
  <div>
    <label><slot name="label"></slot></label>:<br>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'FormRow'
  }
</script>

<style scoped>

</style>
