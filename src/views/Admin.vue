<template>
  <div class="home">
    <LoginAmin/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginAmin from '@/components/LoginAdmin.vue'

export default {
  name: "home",
  components:{
      LoginAmin
  }
};
</script>
<style lang="less" scoped>
.home {
  height: 100vh;
  background: #ffcc00;
}

</style>
