<template >
  <div class="cont">
    <v-container style="padding-top: 3rem;">
      <v-img
        contain
        max-height="100"
        max-width="215"
        class="mx-auto"
        src="https://alloxentric.com/wp-content/uploads/2020/11/alloxentric_logo-3x.png"
      >
      </v-img>
      <p class="text-center font-weight-medium" style="font-size: 20px;padding-top:4rem;padding-bottom:0" >Seleccione el tipo de cuenta</p>
    </v-container>
    <v-row style="display:flex;justify-content: center;">


      <v-col md="auto">
        <v-card @click="redirectagent()" class="tarjeta" max-width="400"  max-height="400" style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
          <v-container style="padding-top:2rem;padding-bottom: 1.8rem;">
            <v-img
              contain
              max-height="140"
              width="200"
              class="mx-auto"
              src="https://quizizz.com/_media/quizzes/94c67c90-7ae9-4da8-988e-4c1512b33d8b_900_900">
            </v-img>
          </v-container>
          <v-card-title class="justify-center font-weight-medium" style="padding-top:0;padding-bottom: 0;">
            <h4>AGENTE</h4>
          </v-card-title>
          <v-container>
            <p class="text-center px-8" style="font-size:16px">
              Persona que se inscribe para trabajar por hora para un cliente o para generar su voz.
            </p>
          </v-container>
        </v-card>
      </v-col>


      <v-col md="auto">
        <v-card id="client-role" @click="redirectclient()" class="tarjeta" max-width="400"  max-height="400" style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
          <v-img
            contain
            max-height="200"
            max-width="400"
            class="mx-auto"
            src="https://www.serlogal.com/wp-content/uploads/2015/09/contacto.png">
          </v-img>
          <v-card-title class="justify-center font-weight-medium" style="padding-top:0;padding-bottom: 0;">
              <h4>CLIENTE</h4>
          </v-card-title>
          <v-container>
            <p class="text-center px-8" style="font-size:16px">
                Empresa que se inscribe en la plataforma para contratar uno o más servicios.
            </p>
          </v-container>
        </v-card>
      </v-col>


      <v-col md="auto">
        <v-card id="provider-role" class="tarjeta" max-width="400"  max-height="400" style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
          <v-container style="padding-top:2rem;padding-bottom: 1.8rem;">
            <v-img
              contain
              max-height="140"
              max-width="400"
              class="mx-auto"
              src= '@/assets/proveedor.png'>
            </v-img>
          </v-container>
          <v-card-title class="justify-center font-weight-medium" style="padding-top:0;padding-bottom: 0;">
              <h4>PROVEEDOR</h4>
          </v-card-title>
          <v-container>
            <p class="text-center px-8" style="font-size:16px">
                Empresa que se inscribe para prestar servicios en una categoría.
            </p>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator';
 import keycloak from '@/main';
 import axios from 'axios';
import { config } from 'vue/types/umd';
 @Component({
   name: 'RoleMenu',
 })
 export default class RoleMenu extends Vue {
  data: () => ({
      items: [
        { title: 'Configuracion' },
        { title: 'Cerrar Sesion' },
      ],
    })
  
  public redirectagent() {
    this.$router.push({ name: 'AgentForm' });
  }
  public redirectclient() {
    this.$router.push({ name: 'ClientForm' });
  }
}
</script>
<style>
.container--fluid{
  padding: 0;
}
.cont{
  height:100vh;
  width:100vw;	
  background: url('@/assets/fondo.webp') ;
  background-size: cover;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.tarjeta { transition: all .2s ease-in-out;cursor: pointer; }
.tarjeta:hover { transform: scale(1.1); }
</style>