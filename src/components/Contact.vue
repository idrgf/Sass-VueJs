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

                <!--select a choix multiple dynamique-->
                <label for="selected">Vous souhaitez etre selectionné par: </label>
                <select v-model="selected" id="selected">
                    <option
                        v-for="option in options"
                        v-bind:key="option.value">
                        {{ option.text }}
                    </option>
                </select>
                <p>Sélectionné : {{ selected }}</p>
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
            message:'',
            selected: 'telephone',
            options:[
                {text: 'telephone', value: 'telephone' },
                {text: 'mail', value: 'mail' }
            ]
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