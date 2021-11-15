<template>
  <div id="app" class="container">
    <Register
      @registerUser="registerUser"
      :title="'Register'"
      v-if="showComponent == 'register'"
    />
    <Login
      :loginError="loginError"
      @loggedInUser="loggedInUser"
      v-else-if="showComponent == 'login'"
    />
    <Dashboard
      :users="users"
      @addUser="addUser"
      v-else-if="showComponent == 'dashboard'"
    />
  </div>
</template>

<script>
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Register,
    Login,
    Dashboard,
  },
  data() {
    return {
      users: [],
      showComponent: 'register',
      loginError: false,
    }
  },
  methods: {
    registerUser(user) {
      this.users.push(user)
      this.showComponent = 'login'
    },
    addUser(user) {
      this.users.push(user)
    },
    loggedInUser(user) {
      let check = this.users.filter((u) => {
        return u.email == user.email && u.password == user.password
      })

      if (check.length) {
        this.showComponent = 'dashboard'
      } else {
        this.loginError = true
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
