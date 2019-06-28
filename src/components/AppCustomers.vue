<template>
<div>
  <ul>
    <li v-for='(customer,index) in customers' :key="index">
        {{customer.fullName}} - {{customer.email}}
        <button @click="handleDelete(customer)" > Delete</button>
    </li>
  </ul>
</div>
</template>

<script>

import  {customerService}  from '@/services/CustomerServices'


export default {
  components:{
    
  },

  methods:{
    handleDelete(costumer){
      customerService.remove(costumer)
    }
  },

  data () {
    return {
      customers: customerService.list()
    }
  }
  }

    

</script>


<style >

</style>
