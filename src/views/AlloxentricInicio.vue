<template>
  <div class>
    <v-row justify="center" class="text-center">
      <v-col col="12" sm="6" md="6"  style="padding-top:3rem">
        <h1>Solicitudes de registro</h1>
      </v-col>
    </v-row>
    <v-container class="card-section">
      <v-card :elevation=1 class="card">
        <v-row>
          <v-col md="auto">
            <v-container class="py-0">
              <v-img
                max-height="200"
                max-width="200"
                src= '@/assets/user.jpg'>
              </v-img>
            </v-container>
          </v-col>
          <v-col>
            <v-container class="text-card">
              <p class="text">Nombre: Nombre Nombre</p>
              <p class="text">Apellido: Apellido Apellido</p>
              <p class="text">Rol: Rol</p>
              <v-spacer></v-spacer>
              <v-btn @click="empresa = true">
                 Detalle
              </v-btn>
            </v-container>
          </v-col>
          <v-col cols="auto" class="buttons">
            <v-container class="d-flex justify-center">
              <v-btn color="green lighten-4">
                 Aceptar solicitud
              </v-btn>
            </v-container>
            <v-container>
              <v-btn color="red accent-1">
                Rechazar solicitud
              </v-btn>
            </v-container>
          </v-col>
        </v-row>      
      </v-card>

      
      <v-card :elevation=1 class="card">
        <v-row>
          <v-col md="auto">
            <v-container class="py-0">
              <v-img
                max-height="200"
                max-width="200"
                src= '@/assets/user.jpg'>
              </v-img>
            </v-container>
          </v-col>
          <v-col>
            <v-container class="text-card">
              <p class="text">Nombre: Nombre Nombre</p>
              <p class="text">Apellido: Apellido Apellido</p>
              <p class="text">Rol: Rol</p>
              <v-spacer></v-spacer>
              <v-btn @click="oldempresa = true">
                 Detalle
              </v-btn>
            </v-container>
          </v-col>
          <v-col cols="auto" class="buttons">
            <v-container class="d-flex justify-center">
              <v-btn color="green lighten-4">
                 Aceptar solicitud
              </v-btn>
            </v-container>
            <v-container>
              <v-btn color="red accent-1">
                Rechazar solicitud
              </v-btn>
            </v-container>
          </v-col>
        </v-row>      
      </v-card>


      <v-card :elevation=1 class="card">
        <v-row>
          <v-col md="auto">
            <v-container class="py-0">
              <v-img
                max-height="200"
                max-width="200"
                src= '@/assets/user.jpg'>
              </v-img>
            </v-container>
          </v-col>
          <v-col>
            <v-container class="text-card">
              <p class="text">Nombre: Nombre Nombre</p>
              <p class="text">Apellido: Apellido Apellido</p>
              <p class="text">Rol: Rol</p>
              <v-spacer></v-spacer>
              <v-btn @click="agente = true">
                 Detalle
              </v-btn>
            </v-container>
          </v-col>
          <v-col cols="auto" class="buttons">
            <v-container class="d-flex justify-center">
              <v-btn color="green lighten-4">
                 Aceptar solicitud
              </v-btn>
            </v-container>
            <v-container>
              <v-btn color="red accent-1">
                Rechazar solicitud
              </v-btn>
            </v-container>
          </v-col>
        </v-row>      
      </v-card>
    </v-container>
 
    <v-dialog
              v-model="empresa"
              max-width="1000px"
              >
              <v-card>
                <v-card-title class="justify-center">
                  detalle empresa registrada
                </v-card-title>
                <v-row>
                  <v-col>
                    <v-container>
                  <h1>Logo empresa</h1>
                    <v-img
                    max-height="200"
                    max-width="200"
                    src= '@/assets/user.jpg'>
                  </v-img>
                </v-container>
            </v-col>
            <v-col class="text-card">
              <p class="text">Empresa: Utem</p>
              <p class="text">Fecha de ingreso: 19-11-22</p>
              <p class="text">Rol: client</p>
              <p class="text">Numero empleados: 7</p>
              <p class="text">Accesos solicitados: autoenrollment,etc </p>
              <p class="text">Informacion adicional: esta empresa blablabla.</p>
            </v-col>
            </v-row>
            <v-card-actions class="justify-center">
            <v-btn
              color="primary"
              text
              @click="empresa = false"
            >
              Close
            </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

            <v-dialog
              v-model="oldempresa"
              max-width="1000px"
              >
              <v-card>
                <v-card-title class="justify-center">
                  detalle oldempresa registrada
                </v-card-title>
                <v-row>
                  <v-col>
                    <v-container>
                  <h1>Logo empresa</h1>
                    <v-img
                    max-height="200"
                    max-width="200"
                    src= '@/assets/user.jpg'>
                  </v-img>
                </v-container>
            </v-col>
            <v-col class="text-card">
              <p class="text">Empresa: Utem</p>
              <p class="text">Fecha de ingreso: 19-11-22</p>
              <p class="text">Rol: client</p>
            </v-col>
            </v-row>
            <v-card-actions class="justify-center">
            <v-btn
              color="primary"
              text
              @click="oldempresa = false"
            >
              Close
            </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

            <v-dialog
              v-model="agente"
              max-width="1000px"
              >
              <v-card>
                <v-card-title class="justify-center">
                  detalle agente
                </v-card-title>
                <v-row>
                  <v-col>
                    <v-container>
                  <h1>imagen usuario</h1>
                    <v-img
                    max-height="200"
                    max-width="200"
                    src= '@/assets/user.jpg'>
                  </v-img>
                </v-container>
                  <v-container>
                  <h1>imagen carnet</h1>
                  <v-img
                  max-height="200"
                  max-width="200"
                  src= '@/assets/user.jpg'>+
                </v-img>
              </v-container>
            </v-col>
            <v-col class="text-card">
              <p class="text">Agente: Pablo</p>
              <p class="text">Apellido: Escobar</p>
              <p class="text">Rol: Developer</p>
              <p class="text">Empresa afiliada: UTEM</p>
              <p class="text">Horario?: no creo </p>
              <p class="text">Informacion2: respuesta</p>
            </v-col>
            </v-row>
            <v-card-actions class="justify-center">
            <v-btn
              color="primary"
              text
              @click="agente = false"
            >
              Close
            </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

  </div>
</template>

<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator';
 @Component({
   name: 'ClientInicio',
 })
 export default{
  data () {
    return {
      empresa: false,
      oldempresa: false,
      agente: false,
    }
  },
}
</script>
<style>
.v-responsive__content {
  width: fit-content;
  height: fit-content;
}
.text-card{
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  justify-content: center;
  height: 100%;
}
.text{
  font-size: 18px;
}

.buttons{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.card-section{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem;
}
.card{
  height:fit-content;
   width:90%;
   padding: 1rem;
   margin-bottom:1rem;
}
</style>