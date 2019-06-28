import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppProducts from '@/components/AppProducts'
import AppCustomers from '@/components/AppCustomers'

const routes = [
  {path: '/products',component: AppProducts},
  {path: '/customers',component: AppCustomers}
  
]

const router = new VueRouter({
  routes: routes,
  LinkActiveClass: 'test'
})



Vue.config.productionTip = false


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
