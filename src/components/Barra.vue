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
							<button v-if="logIn"  @click="logout"  class="btn bg-secondary text-white"> Cerrar Sesión</button>
							<button v-else  @click="mandarLog"  class="nito btn text-black bg-warning"> Ingresar</button>
						</div>
						<div class="col-md-2 col3 ">
							<h6 class="nito" v-if="logIn" > {{count}}  </h6>
							<button  @click="registrar" v-else class="btn bg-primary text-white"> Regístrate</button>
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
  name: 'Barra',
  data: function () {
    return {
      count: localStorage.getItem("nombre")
    }
  },
  props:{logIn: Boolean},
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push({path:'/login'})
	},
	mandarLog(){
		this.$router.push({path:'/login'})
	},
	registrar(){
		this.$router.push({path:'/registro'})
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
.nito{font-weight: bold;}
</style>
