import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap" 

// pagination
import Pagination from 'v-pagination-3'

//Skeletor
import { Skeletor } from "vue-skeletor";

createApp(App).component(Skeletor.name, Skeletor).component('pagination', Pagination).use(store).use(router).mount('#app')
