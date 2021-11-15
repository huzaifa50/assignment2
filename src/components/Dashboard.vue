<template>
  <div>
    <div class="card">
      <div class="card-header">Dashboard</div>
      <div class="card-body">
        <div class="row mb-3 add-btn">
          <button
            type="button"
            class="btn btn-primary"
            @click="showAddUser"
            v-show="!add"
          >
            Add User
          </button>
        </div>
        <AddUser
          :title="'Add User'"
          v-if="add"
          @userAdded="userAdded"
          @cancel="cancelAdd"
        />
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Roll No</th>
            </tr>
          </thead>
          <tbody>
            <fragment v-for="(user, index) in users" :key="index">
              <UserTable :user="user" :index="index" @rowClicked="rowClicked" />
            </fragment>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import UserTable from './UserTable.vue'
import AddUser from './AddUser.vue'

export default {
  components: {
    UserTable,
    AddUser,
  },
  data() {
    return {
      add: false,
    }
  },
  props: ['users'],
  methods: {
    rowClicked(email) {
      alert(`${"User's email is " + email}`)
    },
    showAddUser() {
      this.add = true
    },
    userAdded(user) {
      this.$emit('addUser', user)
      this.add = false
    },
    cancelAdd() {
      this.add = false
    },
  },
}
</script>
<style scoped>
.add-btn {
  float: right;
  margin-right: 0.1rem;
}
</style>
