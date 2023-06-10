import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import './assets/tailwind.css'

axios.defaults.baseURL = "https://sciek-django.captain.patraz.online"
createApp(App).use(store).use(router, axios).mount('#app')