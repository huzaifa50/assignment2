import Vue from 'vue'

Vue.filter('capitalize', function (value) {
  if (value) {
    value = value.toString()
    return value.charAt(0).toUpperCase() + `${value[1] ? value.slice(1) : ''}`
  }
  return ''
})
