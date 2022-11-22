<template>
    <div class>
      <v-row justify="center" class="text-center">
        <v-col col="12" sm="6" md="6" style="padding-top:3rem">
          <h1>Agent Inicio</h1>
        </v-col>
      </v-row>
    <v-row
      justify="center"
    >
      <v-btn
        color="primary"
        class="ma-2"
        dark
        @click="dialog2 = true"
      >
      introducir horario
      </v-btn>
      <v-btn
        color="primary"
        class="ma-2"
        dark
        @click="dialog3 = true"
      >
        calendario
      </v-btn>
      <v-dialog
        v-model="dialog2"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            seleccion horario libre
          </v-card-title>
          <v-card-text>
            <v-select
              :items="select"
              label="Seleccione el dia"
              item-value="text"
            ></v-select>
            <v-text-field label="Escriba su horario disponible"></v-text-field>
          </v-card-text>
          <v-container class="d-flex justify-space-around  mb-6">
            <v-btn 
                  v-show="!hidden"
                  color="red"
                  fab
                  dark
                  small
                  center
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
          </v-container>
          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="dialog2 = false"
            >
              Close
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog2 = false"
            >
              save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      
      

      <v-dialog
        v-model="dialog3"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            <span>calendario</span>
            <v-spacer></v-spacer>
            <v-menu
              bottom
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="() => {}"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-row>


            </v-row>

          </v-card-title>
          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="dialog3 = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    </div>
</template>

<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator';
 @Component({
   name: 'AgentInicio',
 })
 export default {
  data () {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      notifications: false,
      sound: true,
      widgets: false,
      select: [
        { text: 'Lunes' },
        { text: 'Martes' },
        { text: 'Miercoles' },
        { text: 'Jueves' },
        { text: 'Viernes' },
        { text: 'Sabado' },
        { text: 'Domingo' },
      ],
    }
  },
}
</script>