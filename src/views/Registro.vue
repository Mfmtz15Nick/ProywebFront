<template>
  <div class="home" >
    <Nubes />
    <div class="inicio" >
		<div class="container-fluid contenedor">
			<div class="row">
				<div class="col-md-12 columna1">
					<h1>Regístrate con nosostros</h1>
					<p>Es un muy sencillo. Solo ingresa los datos que se te piden y <br> en breve quedarás registrado.</p>
				</div>
			</div>
			<div class="row renglon2">
				<div class="col-md-6 columna2 ">
					<input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="addon-wrapping">
					<small>Escriba su nombre.</small>
					<br><br>
					<div class="row">
						<div class="col-md-6">
								<input type="text" class="space40 form-control" placeholder="Primer Apellido" aria-label="Primer Apellido" aria-describedby="addon-wrapping">
								<small>Escriba su primer Apellido.</small>
						</div>
						<div class="col-md-6">
								<input type="text" class="space40 form-control" placeholder="Segundo Apellido" aria-label="Segundo Apellido" aria-describedby="addon-wrapping">
								<small>Escriba su segundo Apellido.</small>
						</div>
					</div>
					<br>
					<div class="row">
							<div class="col-md-6">
									<input type="text" class="space40 form-control" placeholder="Correo" aria-label="Correo" aria-describedby="addon-wrapping">
									<small>Escriba su correo electrónico.</small>
							</div>
							<div class="col-md-6">
									<input type="text" class="space40 form-control" placeholder="Telefono" aria-label="Telefono" aria-describedby="addon-wrapping">
									<small>Escriba su telefono.</small>
							</div>
						</div>
						<br>
						<input type="text" class="form-control" placeholder="Direccion" aria-label="Direccion" aria-describedby="addon-wrapping">
					<small>Escriba su direccion.</small>

					
					<br><br>

					<button class="btn space40 btn-block btn-primary">Registrar</button>
				</div>
			</div>
		</div>

	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nubes from '@/components/Nubes.vue'

export default {
  name: 'home',
  components: {
    Nubes
  }
}
</script>
<style lang="less" scoped>
.inicio{height: 120vh;}
.inicio .contenedor .row .columna1 h1{ text-align: center; }
.inicio .contenedor .row .columna1 p{ text-align: center; }
.inicio .contenedor .renglon2 { margin-top: 50px; justify-content: center; display: flex; }


</style>