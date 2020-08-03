import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from "./Routes"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import underscore from 'vue-underscore';


Vue.config.productionTip = false

//utilisation de la librairie Lodash
Vue.use(underscore)
//utilisation de VueRouter
Vue.use(VueRouter)


const router = new VueRouter({
  routes: Routes,
  //enlever le hash
  mode: 'history'
})

//afficher que 2 chiffre apres la virgule
Vue.filter('currencydecimal', function (value){
  return value.toFixed(2)
})

//inverser les lettres
Vue.filter('reverse', function (value){
  return value.split('').reverse().join('')
})

//Mettre en capitale
Vue.filter('capitalize', function (value){
  return value.toUpperCase()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
