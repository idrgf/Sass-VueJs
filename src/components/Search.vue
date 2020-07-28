<template>
<div>
    <label>
        <section class="inline"><i class="fa fa-search"></i></section>
        <input
            v-on:keyup="each"
            type="search"
            placeholder="Rechercher sur TWP">
    </label>
</div>

</template>
<script>
export default {
    name: 'Search',
    methods: {
        each: function() {
            console.log("ceci n'est pas un troll")
        }
    }
    
}

</script>
<style lang="sass" scoped>
label
    @import "sass/style.sass"

    background: $black
    border-radius: 30px
    padding: 0 8px
    input
        width: 240px
        height: 40px
        padding-left: 6px
        border: 0
        border-radius: 30px
        background: #000
        color: white
        &:focus
            outline: none
        &::placeholder
            color: white
</style>