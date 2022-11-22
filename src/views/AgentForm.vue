<template>
   <div class="cont">
    <v-card class="" width="600" style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
    <v-container class="justify-center" pa-8>
      <v-img
        contain
        max-height="100"
        max-width="215"
        class="mx-auto py-4"
        src="https://alloxentric.com/wp-content/uploads/2020/11/alloxentric_logo-3x.png"
      >
      </v-img>
      <v-card-title class="justify-center pt-7 pb-0">
        <div style="flex: auto; text-align-last: center">Registro de Agente</div>
      </v-card-title>
      <v-container class="pb-4">
        <v-row>
          <v-col>
            <v-container class="py-6 px-4">
              <v-file-input
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Foto de perfil"
                prepend-icon="mdi-camera"
                label="Foto de perfil"
              ></v-file-input>
              <v-file-input
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Carnet de identidad (frente)"
                prepend-icon="mdi-camera"
                label="Carnet de identidad (frente)"
              ></v-file-input>
              <v-file-input
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Carnet de identidad (detrás)"
                prepend-icon="mdi-camera"
                label="Carnet de identidad (detrás)"
              ></v-file-input>
              <template>
              <v-file-input
                show-size
                label="File input"
              ></v-file-input>
            </template>
            </v-container>
            <v-container class="d-flex justify-center">
              <v-btn
                @click="setrole('agent-role')"
                depressed
                color="#06b7b2"
                class="white--text"
              >
                Crear
              </v-btn>
            </v-container>
          </v-col>
         </v-row>
        </v-container>
      </v-container>
    </v-card>     
</div>
</template>
<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator';
 import axios from 'axios';
 import keycloak from '@/main';
 @Component({
   name: 'AgentForm',
 })
 export default class AgentForm extends Vue {

  selectedRole:''
  userKeycloakId = keycloak.tokenParsed.sub;
  userKeycloakToken: '';


  public setrole(role){
    this.selectedRole = role;
    console.log(this.selectedRole);
    console.log("id usuario" + this.userKeycloakId);
    console.log(this.userKeycloakToken);
    this.tokenfromkeycloak(this.selectedRole);
    
  }

  public tokenfromkeycloak(role:string){
    // grant_type=urn:ietf:params:oauth:grant-type:uma-ticket
    // audience=xentric_base
    // permission=autoenrollment
    // 
    const keycloakEndpoint = process.env.VUE_APP_KEYCLOAK_URL +
      "/realms/" +
        process.env.VUE_APP_KEYCLOAK_ADMIN_REALM +
        "/protocol/openid-connect/token";
        axios
        .post(
          keycloakEndpoint,
          new URLSearchParams({
            client_id: process.env.VUE_APP_KEYCLOAK_ADMIN_CLIENT_ID,
            username: process.env.VUE_APP_KEYCLOAK_ADMIN_USERNAME,
            password: process.env.VUE_APP_KEYCLOAK_ADMIN_PASSWORD,
            grant_type: process.env.VUE_APP_KEYCLOAK_GRANT_TYPE,
          }),
        )
        .then((res) => {
          this.userKeycloakToken = res.data.access_token;
          console.log('token admin: ' + this.userKeycloakToken);
          this.assignRole(role);
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
  }

  public assignRole(role:string){
    console.log('rol seleccionado ' + role);
    console.log('userid ' + this.userKeycloakId);
    const keycloakEndpoint = process.env.VUE_APP_KEYCLOAK_URL +
        "/admin/realms/" +
        process.env.VUE_APP_KEYCLOAK_REALM +
        "/users/" +
        this.userKeycloakId +
        "/role-mappings/clients/" +
        process.env.VUE_APP_KEYCLOAK_CLIENTID_ID;
      let roleInfo = [];
      if (role == "client-role") {
        roleInfo = [
          {
            id: process.env.VUE_APP_KEYCLOAK_CLIENT_ROLE_ID,
            name: process.env.VUE_APP_KEYCLOAK_CLIENT_ROLE,
          },
        ];
      } else if (role == "agent-role") {
        roleInfo = [
          {
            id: process.env.VUE_APP_KEYCLOAK_AGENT_ROLE_ID,
            name: process.env.VUE_APP_KEYCLOAK_AGENT_ROLE,
          },
        ];
      } else if (role == "provider-role") {
        roleInfo = [
          {
            id: process.env.VUE_APP_KEYCLOAK_PROVIDER_ROLE_ID,
            name: process.env.VUE_APP_KEYCLOAK_PROVIDER_ROLE,
          },
        ];
      }
      console.log(roleInfo)
      axios.post(keycloakEndpoint, roleInfo, {
          headers: {
            Authorization: "Bearer " + this.userKeycloakToken,
          },
        })
        .then(async(res)  =>  {
          //await new Promise(r => setTimeout(r, 10000));
          await this.$router.push({ name: "dashboard" });
          window.location.reload();
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
  }

 }
</script>
<style>
.cont{
  height:100vh;
  width:100vw;	
  background: url('@/assets/fondo.webp') ;
  background-size: cover;
  display:flex;
  align-items: center;
  justify-content: center;
}
</style>