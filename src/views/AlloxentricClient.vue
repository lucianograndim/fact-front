<template>
  <div class>
    <v-row justify="center" class="text-center">
      <v-col col="12" sm="6" md="6"  style="padding-top:2rem">
        <h1>gestion de Cliente</h1>
      </v-col>
    </v-row>
    <v-container class="overflow-y-auto" max-height="10rem" width="80%" style="padding-top:2rem;display:flex;justify-content: center;flex-direction:column" >
      <v-card height="100%" width="100%" style="margin-bottom:2rem;display:flex">
          <p class="pa-4">Empresa: UTEM</p>
          <v-col>
            <p class="text">Fecha de ingreso: 19/11/2022</p>
            <p class="text">Rol activo: cliente</p>
            <p class="text">Numero de empleados: 8</p>
            <p class="text">necesidad: buscando developers</p>
          </v-col>
          <v-spacer></v-spacer>
          <v-col style="display:flex;justify-content: center;align-items: center;">
            <v-btn @click="detalle = true">
              Detalles
            </v-btn>
          </v-col>
      </v-card>
      <v-card height="100%" width="100%" style="margin-bottom:2rem;display:flex">
          <p class="pa-4">Nombre empresa 2</p>
          <v-col>
            <p class="text">Fecha de ingreso: 19/11/2022</p>
            <p class="text">Rol activo: cliente</p>
            <p class="text">Numero de empleados: 8</p>
            <p class="text">necesidad: buscando developers</p>
          </v-col>
          <v-spacer></v-spacer>
          <v-col style="display:flex;justify-content: center;align-items: center;">
            <v-btn @click="detalle = true">
              Detalles
            </v-btn>
          </v-col>
      </v-card>
      <v-card height="100%" width="100%" style="margin-bottom:2rem;display:flex">
          <p class="pa-4">Nombre empresa 3</p>
          <v-col>
            <p class="text">Fecha de ingreso: 19/11/2022</p>
            <p class="text">Rol activo: cliente</p>
            <p class="text">Numero de empleados: 8</p>
            <p class="text">necesidad: buscando developers</p>
          </v-col>
          <v-spacer></v-spacer>
          <v-col style="display:flex;justify-content: center;align-items: center;">
            <v-btn @click="detalle = true">
              Detalles
            </v-btn>
          </v-col>
      </v-card>
      <v-card height="100%" width="100%" style="margin-bottom:2rem;display:flex">
          <p class="pa-4">Nombre empresa 4</p>
          <v-col>
            <p class="text">Fecha de ingreso: 19/11/2022</p>
            <p class="text">Rol activo: cliente</p>
            <p class="text">Numero de empleados: 8</p>
            <p class="text">necesidad: buscando developers</p>
          </v-col>
          <v-spacer></v-spacer>
          <v-col style="display:flex;justify-content: center;align-items: center;">
            <v-btn @click="detalle = true">
              Detalles
            </v-btn>
          </v-col>
      </v-card>
    </v-container>


    <v-dialog
    v-model="detalle"
    max-width="1000px"
    >
    <v-card>
      <v-card-title class="justify-center">
        Informacion de la empresa
      </v-card-title>
      <v-container class="overflow-y-auto" max-height="10rem" width="80%" style="padding-top:2rem;display:flex;justify-content: center;" >
      <v-card width="100%">
        <v-card-title>
          colaboradores
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="empresas"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-container>
    <v-row style="justify-content:center">
      <v-btn
      color="primary"
      text
      @click="detalle = false"
      >
      Close
    </v-btn>
    </v-row>
    </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator';
 @Component({
   name: 'ClientDashboard',
 })
 export default{
  data: () => ({
    detalle: false,
      search: '',
      headers: [
        { text: 'nombre', align: 'start', value: 'nombre' },
        { text: 'apellido', value: 'apellido' },
        { text: 'numero de indentificacion', value: 'numero'},
        { text: 'participacion', value: 'status'},
        { text: 'Fecha de ingreso', value: 'registro' },
        { text: 'rol', value: 'rol' },
      ],
      empresas: [
        {
          nombre: 'roberto',
          apellido: 'rojas',
          numero: '23',
          status: 'Superadmin',
          registro: '24/01/2020',
          rol: 'CEO',
        },
        {
          nombre: 'jose',
          apellido: 'Dias',
          status: 'trabajador de la empresa',
          numero: '56',
          registro: '24/01/2020',
          rol: 'Gerente',
        },
        {
          nombre: 'Ricardo',
          apellido: 'Perez',
          status: 'agente-freelance',
          numero: '56',
          registro: '24/01/2020',
          rol: 'developer',
        },
      ],
    })
 }
</script>
