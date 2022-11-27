<template>
  <div class="cont">
    <v-card class="" width="1200" style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <v-container class="justify-center" pa-8>
        <v-img contain max-height="100" max-width="215" class="mx-auto py-4"
          src="https://alloxentric.com/wp-content/uploads/2020/11/alloxentric_logo-3x.png">
        </v-img>
        <v-card-title class="justify-center py-7">
          <div style="flex: auto; text-align-last: center">Vista previa factura</div>
        </v-card-title>
        <v-container class="py-4">
          <v-div>
            <iframe style= "width : 100%; height :750px" src="https://www.orimi.com/pdf-test.pdf" frameborder="0"></iframe>
          </v-div>
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
  name: 'pdfView',
})
export default class pdfView extends Vue {

  selectedRole: ''
  userKeycloakId = keycloak.tokenParsed.sub;
  userKeycloakToken: '';
  pdf;

  public setrole(role) {
    this.selectedRole = role;
    this.tokenfromkeycloak(this.selectedRole);
  }
  //Get token from keycloak
  public tokenfromkeycloak(role: string) {
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
  //Assign role to user
  public assignRole(role: string) {
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
      .then(async (res) => {
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
.container--fluid {
  width: 100vw;
  height: 100vh;
  padding: 0;
}

.cont {
  height: 100vh;
  width: 100vw;
  background: url('@/assets/fondo.webp');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>