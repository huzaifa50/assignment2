<template>
  <div>
    <div class="card">
      <div class="card-header">Login</div>
      <div class="card-body">
        <form>
          <div class="mb-3" v-show="errors.length">
            <p v-for="(error, index) in errors" :key="index" class="error">
              {{ error }}
            </p>
          </div>
          <div class="mb-3" v-show="loginError">
            <p v-show="loginError" class="error">Invalid Credentials</p>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
            />
          </div>

          <button type="button" @click="login" class="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['loginError'],
  data() {
    return {
      email: '',
      password: '',
      errors: [],
    }
  },
  methods: {
    login(e) {
      this.errors = []

      if (!this.email) {
        this.errors.push('Email is required')
      }
      if (!this.password) {
        this.errors.push('Password is required')
      }

      e.preventDefault()

      let loggedInUser = {
        email: this.email,
        password: this.password,
      }

      if (!this.errors.length) {
        this.$emit('loggedInUser', loggedInUser)
      }
    },
  },
}
</script>
<style scoped>
.error {
  color: red;
}
</style>
