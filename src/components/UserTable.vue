<template>
  <tr
    :class="{ green: index % 2 == 0, blue: index % 2 != 0 }"
    @click="rowClicked"
    :style="{ cursor: 'pointer' }"
  >
    <td>
      {{ user.firstname | capitalize }}
      {{ user.lastname | capitalize }}
    </td>
    <td>{{ user.email }}</td>
    <td>{{ user.rollNo }}</td>
  </tr>
</template>
<script>
export default {
  props: ['user', 'index'],
  methods: {
    rowClicked() {
      this.$emit('rowClicked', this.user.email)
    },
  },
}
</script>
<style scoped>
.green {
  background-color: lightgreen;
}
.blue {
  background-color: lightblue;
}
</style>
