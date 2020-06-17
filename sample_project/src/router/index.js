import Vue from 'vue'
import VueRouter from 'vue-router'
import Error404 from '../views/Error404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(
      /* webpackChunkName: "Home" */
      '../views/Home.vue'
    )
  },
  {
    path: '/servers/',
    name: 'ServersList',
    component: () => import(
      /* webpackChunkName: "ServersList" */
      '../views/ServersList.vue'
    )
  },
  {
    path: '/servers/:server_id',
    name: 'ServerDetail',
    component: () => import(
      /* webpackChunkName: "ServersList" */
      '../views/ServerDetail.vue'
    )
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(
      /* webpackChunkName: "LoginPage" */
      '../views/LoginPage.vue'
      )
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import(
      /* webpackChunkName: "LogoutPage" */
      '../views/LogoutPage.vue'
      )
  },
  {
    path: '*',
    name: 'Error404',
    component: Error404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const allowedRoutes = [
  'Home',
  'Login'
]

router.beforeEach(function (to, from, next) {
  const isLoggedIn = !!sessionStorage.getItem('userLoggedIn')
  if (isLoggedIn || allowedRoutes.includes(to.name)) {
    next()
  } else {
    next({name: 'Login'})
  }
})

export default router
