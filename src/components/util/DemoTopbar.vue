<template>
  <v-app-bar color="" app>
    <v-container class="d-flex justify-space-between">
      <div class="text-center">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
                <img src="@/assets/Alloxentric-logo-full-color.png" width="190" height="45"/>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
      <template >
          <v-list class="mainlogout">
            <v-list-item class="logout" @click="listenLogout">
            <v-list-item-title>
              Cerrar Sesión
            </v-list-item-title>
            </v-list-item>
          </v-list>
      </template>
    </v-container>
  </v-app-bar>
  </template>
  <script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';
    import { LOCALES, Locales } from "@/locales/i18n";
    import MixinLogin from '@/mixing/MixinLogin.vue';
    import defaultLocale from "@/i18n";
    @Component({
      name: 'AppBar',
    })
    
    export default class AppBar extends MixinLogin {
      public locales_array = LOCALES;
      public locale_default = defaultLocale;
      @Prop() readonly keycloak!: string
  
      public listenLogout() {
              //this.logout();
              //Util.showMessage('Hasta pronto', Icon.INFO);
              this.$router.push({
                  name: 'Login',
              });
              //this.keycloak.logout();
          }
  
    }
  </script>
<style>

.logout{
  background-color: #f5f5f5;
  height: fit-content;
  padding: 0px;
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0px;
}

.mainlogout{
  margin:0.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 0;
  margin-top: 1rem;

}

</style>