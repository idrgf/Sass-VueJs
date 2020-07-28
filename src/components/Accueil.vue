<template>
<div class="main">
    <div class="content">
        <hr>
        <h1>{{ t }}</h1>
        <h1 v-bind:class="{ yellow : change }">{{ w }}</h1>
        <h1>{{ p }}</h1>
        <hr>
        <button
        v-on:click="change = !change">light</button>
    </div>


    <div class="lorem">
        <transition name="fade">
            <div v-if="visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sint rerum sapiente aut et deserunt ab? Obcaecati veritatis soluta mollitia eveniet, ullam doloremque reprehenderit ab, perspiciatis assumenda ea debitis tenetur?
            </div>
        </transition>
        <button v-on:click="toggle">toggle</button>
    </div>


    <div>
        <ul>
            <transition-group name="flip-list" tag="ul">
                <li
                class="box"
                v-for="tableau in tableaux"
                v-bind:key="tableau">{{ tableau }}</li>
            </transition-group>
        </ul>
        <button v-on:click="shuffle">shuffle</button>
    </div>


    <div class="add">
        <button v-on:click="add">ajouter</button>
        <ul class="unshift">
            
            <li
                v-for="number in numbers"
                v-bind:key="number">{{ number }}</li>
        </ul>
    </div>
    
</div>

</template>
<script>
import {_} from 'vue-underscore';

export default {
 name: 'Accueil',
 data(){
     return{
         t: 'The',
         w: 'Weird',
         p: 'Project',
         change: false,
         visible: true,
         tableaux: ['Bizarre', 'weird', 'seltam', 'dziwne'],
         numbers: []
     }
 },
 methods: {
     toggle: function(){
         return this.visible = !this.visible
     },
     add: function() {
         return this.numbers.unshift(Math.floor(Math.random()* 100))
     },
     shuffle: function(){
         return this.tableaux = _.shuffle(this.tableaux)
     }
 }
}



</script>
<style lang="sass" scoped>
    @import "sass/style.sass"

.yellow
    color: $yellow
.box
    height: 100px
    width: 100px
    border: 1px solid #000
    margin: 30px
    display: flex
    justify-content: center
    align-items: center
    border-radius: 25%
    background: rgba(240, 199, 88, .8)
    color: $primary-color
    font-weight: bold
    font-size: 20px

.flip-list-move
    transition: transform 1s
ul
    @extend %padding-shared

</style>