<template>
  <div >
  <!--  <a href="" @click="logout">Logout</a>-->
  <div class="barra">
		<nav class="">
			<div class="contenido container-fluid">
				<div class="row">
					<div class="col-md-2 col1 ">
						<img src="../images/logoNav.png" alt="">
					</div>
					<div class="derecha col-md-10 ">
						<div class="col-md-2 col2 ">
							<button  @click="mandarLog"  class="btn bg-white"> Ingresar</button>
						</div>
						<div class="col-md-2 col3 ">
							<button class="btn bg-primary text-white"> Regístrate</button>
						</div>
					</div>
				</div>

			</div>
		</nav>
	</div>

  </div>
</template>

<script>
export default {
  name: 'Principal',
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push({path:'/login'})
	},
	mandarLog(){
		this.$router.push({path:'/login'})
	}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/* Barra fixed */
.barra nav { position: fixed; z-index: 1; width: 100%; background: rgba(255, 255, 255, 0.6);; }
.barra nav .contenido .row .col1 img { padding: 8px; }
.barra nav .contenido .row .derecha { justify-content: flex-end; display: flex; }
.barra nav .contenido .row .derecha .col2 { justify-content: center; align-items: center; display: flex; }
.barra nav .contenido .row .derecha .col3 { justify-content: center; align-items: center; display: flex; }

</style>
