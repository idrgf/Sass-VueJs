import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from "./Routes"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import underscore from 'vue-underscore';


Vue.config.productionTip = false

Vue.use(underscore)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})
Vue.filter('reverse', function (value){
  return value.split('').reverse().join('')
})

Vue.filter('capitalize', function (value){
  return value.toUpperCase()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
