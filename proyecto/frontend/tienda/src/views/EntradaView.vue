<template>
    <section class="vh-100" style="background-color: #508bfc;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Entrada</h3>
            <div v-if= "mensaje" class="alert alert-danger" role="alert">
               
            </div>
            <div data-mdb-input-init class="form-outline mb-4">
              <input v-model="correo" type="email" id="typeEmailX-2" class="form-control form-control-lg" />
              <label class="form-label" for="typeEmailX-2">Correo</label>
            </div>
            <div data-mdb-input-init class="form-outline mb-4">
              <input v-model="password" type="password" id="typePasswordX-2" class="form-control form-control-lg" />
              <label class="form-label" for="typePasswordX-2">Contrasena</label>
            </div>
            <button @click.prevent="registro()" data-mdb-button-init data-mdb-ripple-init class="
            btn btn-primary btn-lg btn-block" type="submit">Validar</button>
            <p></p>

            <button @click.prevent="registroGoogle()" data-mdb-button-init data-mdb-ripple-init class="
            btn btn-outline btn-lg btn-block" type="submit">
            <Icon class="logos:google-icon" />Google
            </button>


          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
    import {GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
    import { Icon } from '@iconify/vue'

    name: "RegistroView"
    components: {Icon}
    export default{
      data(){
        return{
          correo: '',
          password: '',
          mensaje: ''
        }
      },
      methods:{
        registro(){
          signInWithEmailAndPassword(getAuth(), this.correo, this.password)
          .then((data) => {
            this.mensaje = ''
            this.correo = ''
            this.password = ''
          })
          .catch((error) => {
            switch(error.code){
                case "auth/invalid-email":
                    this.mensaje = "Correo no valido";
                    break;
                case "auth/user-not-found":
                    this.mensaje = "Ese correo no es un usuario valido";
                    break;
                case "auth/wrong-password":
                    this.mensaje = "Contraseña incorrecta";
                    break;
                default:
                    this.mensaje = "Correo o contraseña incorrecta";
                    break;
            }
          })
        },

        registroGoogle() {
          const provider = GoogleAuthProvider();
          signInWithPopup(getAuth(), provider)
          .then((result) => {
            this.$router.push('/clientes/')
          })
        }
      }
    }
  </script>