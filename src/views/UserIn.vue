<template>
  <div class="" >
<PrincipalIn />
   <!-- <a href="" @click="logout">Logout</a>-->
    
   

  </div>
</template>

<script>
import PrincipalIn from '@/components/PrincipalIn.vue'
export default {
  name: 'UserIn',
    components: {
    PrincipalIn
  },
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push({path:'/'})
    }
  },
}

</script>