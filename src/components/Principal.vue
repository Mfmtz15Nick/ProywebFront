<template>
  <div style="background: #DAE9FF; height: 1000px;" >
  
    <!--<a href="" @click="logout">Logout</a>-->
    <Barra>
    </Barra>
    <div class="inicio">
		<div class="nubes">
			<img src="https://pelonchas-231194.000webhostapp.com/Nubes.png" alt="">
		</div>

		<div class="seccion1 mt-5">
			<div class="formulario">
				<div class="container-fluid contenedor">
					<div class="row renglon1">
						<div class="col-md-12 columna1">
							<h1>Sómos tu solución en renta</h1>
							<h1>de transportes</h1> <br><br>
							<h4>Reserva tu servicio de transporte sin</h4>
							<h4>compromiso</h4>
							<!--<button class="btn bg-warning text-white">Reservar</button>-->
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="seccion2">
			<div class="formulario">
				<div class="container-fluid contenedor">
					<div class="row renglon1">
						<div class="col-md-12 columna1">
							<h2>Manejamos tres tamaños de camión</h2>
							<h4>Utiliza el tamaño que más se acomode a tus</h4>
							<h4>necesidades</h4>
						</div>
					</div>
					<div class="row renglon2">
						<div class="col-md-12 columna2">
							<!-- <div> AQUI VAN LOS CAMIONES </div> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


  

  </div>
</template>

<script>
import Barra from './Barra'
export default {
  name: 'Principal',
  components: {
      Barra
  },
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push({path:'/login'})
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/* Bolas de nubes */
.inicio .nubes{ position: relative; height: 19vh; }
.inicio .nubes img{ width: 100%; }

/* SECCION1 - Formulario */
.inicio .seccion1 .formulario .contenedor .renglon1 .columna1 h1 { text-align: center; }
.inicio .seccion1 .formulario .contenedor .renglon1 .columna1 h4 { text-align: center; color: #424242; margin-bottom: 0; margin-top: 0; }
.inicio .seccion1 .formulario .contenedor .renglon1 .columna1 button{ display: block; margin-left: auto; margin-right: auto; margin-top: 20px; }
.inicio .seccion2 { margin-top: 200px; }
.inicio .seccion2 .formulario .contenedor .renglon1 .columna1 h2 { text-align: center; }
.inicio .seccion2 .formulario .contenedor .renglon1 .columna1 h4 { text-align: center; color: #424242;}

</style>
