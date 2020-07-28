<template>
    <div class="main">
        <div class="content">
            <h1>Contact</h1>
            <form>
                <label for="name">Nom :</label>
                <input v-model="name" type="text" id="name">

                <label for="firstname">Prenom :</label>
                <input v-model="firstname" type="text" id="firstname">

                <label for="message">Message :</label>
                <textarea v-model="message" id="message" cols="30" rows="10"></textarea>
            </form>

            <p>Signé : {{ fullname }}</p>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Contact',
    data() {
        return{
            name: '',
            firstname: '',
            message:''
        }
    },
    computed: {
        fullname: function (){
            return this.name + ' ' + this.firstname
        }
    }
}

</script>

<style lang="sass" scoped>
    @import "sass/style.sass"
    input
        display: block
        margin: 10px auto
    textarea
        display: block
        margin: 10px auto
</style>