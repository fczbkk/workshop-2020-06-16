<template>
  <v-app>
    <v-navigation-drawer fixed :permanent="true" v-model="showDrawer" app>
      <p>User is logged in: {{ isUserLoggedIn }}</p>
      <v-list>
        <NavigationItem
          icon="home"
          label="Home"
          :to="{ name: 'Home' }"
        />
        <NavigationItem
          icon="server"
          label="Servers List"
          :to="{ name: 'ServersList' }"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary">
      <div>Server administration</div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import NavigationItem from './components/NavigationItem'
export default {
  name: 'App',
  components: { NavigationItem },
  data () {
    return {
      showDrawer: null,
      isUserLoggedIn: !!sessionStorage.getItem('userLoggedIn')
    }
  }
};
</script>
