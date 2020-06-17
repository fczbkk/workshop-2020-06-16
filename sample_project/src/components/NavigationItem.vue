<template>
  <router-link :to="to" v-slot="{ href }">
    <v-list-item :href="href">
      <v-list-item-action>
        <v-icon>mdi-{{icon}}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{label}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </router-link>
</template>

<script>
  export default {
    name: 'NavigationItem',
    props: {
      label: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: false,
        default: ''
      },
      to: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
