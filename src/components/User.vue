<template>
<div>
    <ul>
        <li><router-link
        v-bind:class="{ white }"
        to="/login">Se connecter</router-link></li>
        <li><router-link
        v-bind:class="{ white }"
        to="/signin">S'inscrire</router-link></li>
    </ul>
</div>

</template>

<script>
export default {
    name: 'User',
    data(){
        return {
            white: true
        }
    }
}

</script>

<style scoped lang="sass">
    @import "sass/style.sass"
div
    height: 40px
li
    padding: 10px
    &+li
        margin-left: 30px
a:hover
    color: $secondary-color
    text-decoration: none

</style>