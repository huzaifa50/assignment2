<template>
  <div>
    <div class="card">
      <div class="card-header">{{ title }}</div>
      <div class="card-body">
        <form>
          <div class="mb-3" v-show="errors.length">
            <p v-for="(error, index) in errors" :key="index" class="error">
              {{ error }}
            </p>
          </div>
          <div class="mb-3">
            <label for="firstname" class="form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstname"
              v-model="firstname"
            />
          </div>
          <div class="mb-3">
            <label for="lastname" class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              v-model="lastname"
            />
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
          <div class="mb-3">
            <label for="confirm_password" class="form-label"
              >Confirm Password</label
            >
            <input
              type="password"
              class="form-control"
              id="confirm_password"
              v-model="confirmPassword"
            />
          </div>

          <button type="button" @click="register" class="btn btn-primary">
            {{ title }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title'],
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: [],
    }
  },
  methods: {
    validatePassword() {
      if (this.password !== this.confirmPassword) {
        this.errors.push('Password and Confirm Password must be same')
      }
    },
    async register(e) {
      this.errors = []
      if (!this.firstname) {
        this.errors.push('First Name is required')
      }
      if (!this.lastname) {
        this.errors.push('Last Name is required')
      }
      if (!this.email) {
        this.errors.push('Email is required')
      }
      if (!this.password) {
        this.errors.push('Password is required')
      }
      if (!this.confirmPassword) {
        this.errors.push('Confirm Password is required')
      }
      this.validatePassword()

      e.preventDefault()

      let user = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      }

      await this.fetchRandomNumbers(user)

      if (!this.errors.length) {
        this.$emit('registerUser', user)
      }
    },
    async fetchRandomNumbers(user) {
      const response = await fetch(
        'https://www.random.org/integers/?num=1&min=0&max=1000&col=1&base=10&format=plain&rnd=new'
      )
      if (response.status == 200) {
        let data = await response.json()
        user['rollNo'] = data
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
