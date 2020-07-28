<template>
  <div class="header-top">
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from "./Navbar"


export default {
  name: 'Header',
  data(){
    return{}
  },
  components: {
    Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import "sass/style.sass"
  
</style>
