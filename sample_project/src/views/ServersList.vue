<template>
  <div>
    <h1>Servers List</h1>
    <div>
      <table>
        <thead>
        <tr>
          <th>id</th>
          <th>IP</th>
          <th>host</th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="({id, ip, host}) of serversList"
          :key="id"
        >
          <td>{{id}}</td>
          <td>{{ip}}</td>
          <td>{{host}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ServersList',
    data () {
      return {
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
