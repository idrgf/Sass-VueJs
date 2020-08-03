<template>
    <!--Utilisation de l'API Coindesk-->
    <div class="bgd">
        <h1>Cours du Bitcoin</h1>
        <div
            v-for="currency in info"
            v-bind:key="currency"
            class="currency">
            {{ currency.code }}:
            <span>
            {{ currency.rate_float | currencydecimal }}<span v-html="currency.symbol"></span>
            </span>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'bitcoin',
    data(){
        return{
            info: null
        }
    },
    mounted(){
        axios
            //appel de l'api
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.info = response.data.bpi))
            //savoir si quelque chose à échoué
            .catch(error => console.log(error))
    }
    
}
</script>

<style lang="sass">


</style>