import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueQrcode from '@chenfengyuan/vue-qrcode';

import App from './App.vue'
import Home from './Home.vue'
import Wallet from './User/Wallet.vue'
import Storefront from './Store/Storefront.vue'
import About from './About.vue'
import Login from './Login.vue'

Vue.use(ElementUI)
Vue.component(VueQrcode.name, VueQrcode);
Vue.use(VueRouter)

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'wallet', path: '/wallet', component: Wallet },
  { name: 'storefront', path: '/store/:vendorName', component: Storefront },
  { name: 'about', path: '/', component: About },
  { name: 'login', path: '/', component: Login },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
