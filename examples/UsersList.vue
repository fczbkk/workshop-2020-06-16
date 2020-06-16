<template>
  <div>

    <p>
      <label>
        <input type="checkbox" v-model="showFirstItem">
        show first item
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" v-model="showSecondItem">
        show second item
      </label>
    </p>

    <p v-show="showFirstItem">show item</p>
    <p v-if="showFirstItem">first item</p>
    <p>/////</p>
    <p v-if="!showFirstItem">third item</p>

    <p
      v-for="(user, index) of usersList"
      :key="index"
    >
      {{ user }}, {{ index }}
    </p>

  </div>
</template>

<script>
  export default {
    name: 'UsersList',
    data () {
      return {
        showFirstItem: false,
        showSecondItem: false,
        usersList: {
          riki: 'Riki Fridrich',
          john: 'John Doe',
          franta: 'Franta Novak'
        }
      }
    }
  }
</script>

<style scoped>

</style>
