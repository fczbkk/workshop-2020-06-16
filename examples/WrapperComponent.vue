<template>
  <div class="wrapper">
    <div class="title">
      <slot name="title">
        Toto je titulok
      </slot>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WrapperComponent'
  }
</script>

<style scoped>
  .wrapper {
    margin: 1em 0;
    border: 1em solid blue;
  }
  .title {
    padding: 0 1em;
    background: blue;
    color: white;
  }
  .content {
    padding: 1em;
  }
</style>
