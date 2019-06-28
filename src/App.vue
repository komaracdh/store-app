<template>
  
  <div id="app">
    
    <router-link class="btn-link" to="/products">Products</router-link>
    <router-link to="/customers">Customers</router-link>
  <router-view/>
  </div>
  
</template>

<script>
import AppCustomers from './components/AppCustomers.vue'
import AppProducts from './components/AppProducts.vue'

export default {
  name: 'app',
  components: {
    AppCustomers,
    AppProducts

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
