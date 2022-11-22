<template>
    <div class="cont2">
      <Demo-Topbar />
      <div justify="center" class="text-center" height="fit-content">
        <div col="12" sm="6" md="6" >
          <div style="padding-top:2rem;">
            <h1>Error 403</h1>
          </div>
          <v-container class="text-center" style="padding-top:1rem;">
            <v-row justify="center">
              <v-img
                max-height="300"
                max-width="300"
                src= '@/assets/no-access-icon.png'>
              </v-img>
            </v-row>
            <h3>Lo sentimos, no tienes los permisos necesarios para acceder a esta pagina.</h3>
          </v-container>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
   import { Component, Vue } from 'vue-property-decorator';
   import DemoTopbar from '@/components/util/DemoTopbar.vue';
   @Component({
     name: 'NoAccess',
     components: {
        DemoTopbar,
      },
   })
   export default class NoAccess extends Vue {
     public message = this.$t("Main.message");
  
   }
  </script>
  <style>
  .cont2{
    height:100vh;
    width:100vw;	
    background: url('@/assets/fondo.webp') ;
    background-size: cover;
  
  }
  .status{
    padding-left: 2rem;
    padding-right: 2rem;
    display:flex;
    flex-wrap: nowrap;
    align-items:center;
  }
  </style>