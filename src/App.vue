

<template>
  <div id="app">
     <header-top></header-top>
     <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    'header-top': Header
  }
}
</script>

<style lang="sass">
  @import "sass/style.sass"
  #app
      font: $font-stack
      -webkit-font-smoothing: antialiased
      -moz-osx-font-smoothing: grayscale
      text-align: center
      color: $primary-color
</style>
