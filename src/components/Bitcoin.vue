<template>
    <div class="bgd">
        <h1>Cours du Bitcoin</h1>
        <div
            v-for="currency in info"
            v-bind:key="currency"
            class="currency">
            {{ currency.description }}:
            <span class="lighten">
            <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
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
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.info = response.data.bpi))
    }
    
}
</script>

<style lang="sass">


</style>