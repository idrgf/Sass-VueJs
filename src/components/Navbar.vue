<template>
<div>
    <div class="nav-bar">
        <search></search>
        <user></user>
    </div>
    <ul>
        <li><router-link v-bind:class="{ black }" to="/">Accueil</router-link></li>
        <li><router-link v-bind:class="{ black }" to="/contact">Contact</router-link></li>
    </ul>
</div>

</template>
<script>
import Search from "./Search"
import User from "./User"

export default {
 name: 'NavBar',
 data(){
     return{
        black: true
     }
 },
 components: {
     Search,
     User
 }
}



</script>
<style lang="sass" scoped>
    @import "sass/style.sass"
    .nav-bar
        display: flex
        justify-content: space-around
        align-items: center
        height: 70px
    ul
        margin-top: 30px
        li+li
            margin-left: 100px
        li
            &:hover
                text-decoration: none
    div
        background-color: $yellow
    
</style>