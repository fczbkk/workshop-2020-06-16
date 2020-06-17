<template>
  <div>
    <h1>Servers List</h1>

    <v-data-table
      :headers="headersConfig"
      :items="serversList"
    >
      <template v-slot:item.actions="{ item }">
        <router-link :to="{name: 'ServerDetail', params: {server_id: item.id}}">view server</router-link>
      </template>
    </v-data-table>

<!--    <v-simple-table>-->
<!--      <template v-slot:default>-->
<!--        <thead>-->
<!--        <tr>-->
<!--          <th>id</th>-->
<!--          <th>IP</th>-->
<!--          <th>host</th>-->
<!--        </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--        <tr-->
<!--          v-for="({id, ip, host}) of serversList"-->
<!--          :key="id"-->
<!--        >-->
<!--          <td>{{id}}</td>-->
<!--          <td>{{ip}}</td>-->
<!--          <td>{{host}}</td>-->
<!--        </tr>-->
<!--        </tbody>-->
<!--      </template>-->
<!--    </v-simple-table>-->
  </div>
</template>

<script>
  export default {
    name: 'ServersList',
    data () {
      return {
        headersConfig: [
          {text: 'id', value: 'id', sortable: true},
          {text: 'IP', value: 'ip', sortable: true},
          {text: 'host', value: 'host', sortable: true},
          {text: 'Actions', value: 'actions', sortable: false}
        ],
        serversList: []
      }
    },
    async beforeRouteEnter (to, from, next) {
      const url = 'http://localhost:3000/servers_list'
      const response = await fetch(url)
      const data = await response.json()
      next(function (futureComponentObject) {
        futureComponentObject.serversList = data
      })
    }
  }
</script>

<style scoped>

</style>
