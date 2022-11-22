<template>
  <div class="cont2">
    <Demo-Topbar />
    <div justify="center" class="text-center" height="fit-content">
      <div col="12" sm="6" md="6" >
        <div style="padding-top:2rem;">
          <h1>Demo</h1>
        </div>
      </div>
    </div>
    <div style="display:flex;justify-content:center;padding-top: 3rem;">
      <v-card class="tarjeta2">
        <v-container class="text-center" style="padding-top:1rem;">
          <h3>Solicitud de registro</h3>
        </v-container>
        <v-container class="status">
            <p class="d-flex align-center" style="margin:0">Estado:</p>
            <div class="badge">En proceso</div>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator';
 import DemoTopbar from '@/components/util/DemoTopbar.vue';
 @Component({
   name: 'Demo',
   components: {
      DemoTopbar,
    },
 })
 export default class Demo extends Vue {
   public message = this.$t("Main.message");

 }
</script>
<style>
.tarjeta2{
  width: 20rem;
  height: fit-content;
  padding-bottom: 1rem;
}
.cont2{
  height:100vh;
  width:100vw;	
  background: url('@/assets/fondo.webp') ;
  background-size: cover;

}

.badge{
  background-color: #A5D8FF;
  color: #1C7ED6;
  padding: 0.3rem;
  border-radius: 1rem;
  margin-left: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: fit-content;
}

.status{
  padding-left: 2rem;
  padding-right: 2rem;
  display:flex;
  flex-wrap: nowrap;
  align-items:center;
}
</style>