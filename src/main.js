import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import router from "./router/index.js"

import vueSweetalert2 from '/node_modules/vue-sweetalert2/dist/vue-sweetalert2.esm.js';

import '/node_modules/sweetalert2/dist/sweetalert2.min.css';




createApp(App)
.use(vueSweetalert2)
.use(router)
.mount('#app')
