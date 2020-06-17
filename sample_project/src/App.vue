<template>
  <div>
    <div>
      <p>Server administrator</p>
      <p>User is logged in: {{ isUserLoggedIn }}</p>
      <ul>
        <li>
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ServersList' }">ServersList</router-link>
        </li>
      </ul>
    </div>
    <router-view />
    <div>Footer</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isUserLoggedIn: !!sessionStorage.getItem('userLoggedIn')
    }
  }
};
</script>
