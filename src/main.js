import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3Material from 'vue3-material';


createApp(App).use(Vue3Material).use(store).use(router).mount('#app')
