<template>
  <div id="app">
     <header-top></header-top>
     <router-view></router-view>
     <aside-top class="twenty"></aside-top>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Aside from './components/Aside';

export default {
  name: 'App',
  data() {
      return{
        twenty: true
    }
  },
  components: {
    'header-top': Header,
    'aside-top': Aside
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
