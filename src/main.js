import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import router from "./router/index.js"

import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';




createApp(App)
.use(VueSweetalert2)
.use(router)
.mount('#app')
