<template>
  <div >
  <!--  <a href="" @click="logout">Logout</a>-->
  <div class="container-fluid contenedor">
      <div class="row">
        <div class="col-md-6 columna">
          <div class="imagen">
            <img alt="Vue logo" src="../images/logoCamion.png" />
          </div>
          <div class="cajas">
            <input
              v-model="correo"
              type="text"
              class="space40 form-control"
              placeholder="Correo electrónico"
              aria-label="Correo electrónico"
              aria-describedby="addon-wrapping"
            />
            <small>Escriba su correo electrónico.</small>
            <br />
            <br />
            <input
              v-model="contrasena"
              type="password"
              class="space40 form-control"
              placeholder="Contraseña"
              aria-label="Contraseña"
              aria-describedby="addon-wrapping"
            />
            <small>Escriba su contraseña.</small>
            <br />
            <br />
            <input class="btn space40 btn-block btn-primary" type="submit" value="Acceder" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'LoginAdmin',
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
 img {
  width: 10%;
}
 .contenedor .row .columna {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
 .contenedor .row .columna .imagen img {
  margin: 5%;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
