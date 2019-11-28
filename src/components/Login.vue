<template>

 <div class="home">
    <Nubes />
   
    <div class="container">
    <div class="row">
      <div class="col-md-12 columna">
        <h1>Bienvenido de nuevo</h1>
      <br><br><br>
      </div>
    </div>
    <div class="row">
      <div class="columna2 col-md-6 ">
        <form action @submit.prevent="login">
          <input
            v-model="usuario"
            type="text"
            class="form-control"
            placeholder="Correo Electrónico"
            aria-label="Correo Electronico"
            aria-describedby="addon-wrapping"
          />
          <small>Escriba su correo Electrónico.</small>

          <input
            v-model="contrasena"
            type="password"
            class="space40 form-control"
            placeholder="Contraseña"
            aria-label="Contraseña"
            aria-describedby="addon-wrapping"
          />
          <small>Escriba su contraseña.</small>

          <input class="btn space40 btn-block btn-primary" type="submit" value="Acceder" />
          {{respuesta}}
        </form>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import Nubes from '@/components/Nubes.vue'
const axios = require("axios");
export default {
  data() {
    return {
      usuario: "",
      contrasena: "",
      respuesta: ""
    };
  },
   components: {
    Nubes
  },
  methods: {
    login() {
      axios
        .post("http://167.99.157.165/cliente/login", {
          correoElectronico: this.usuario,
          password: this.contrasena          

        })
        .then(response => {
          this.respuesta = response.data;
          //this.$router.push({path:'/home'})
         
          const token = response.data.token;
          let nombre = response.data.nombre;
          let rol = response.data.rol;
          localStorage.setItem('token', token);
          localStorage.setItem('nombre', nombre);
          localStorage.setItem('rol', rol);
          window.location.replace('/user');

        })
        .catch(e => {
          this.respuesta = e;
          
        });
    }
  }
};
</script>
<style  scoped>
.container .row {
  justify-content: center;
}
.container .row .columna img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  width: 20%;
}
.container .row .columna {
  margin-top: 60px;
}
.container .row .columna2 {
  color: white;
}
.space40 {
  margin-top: 40px;
}
</style>