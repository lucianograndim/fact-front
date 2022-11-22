<template>
    <v-data-table
      :headers="headers"
      :items="user"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>AGENTES</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                Nuevo Agente
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.correo"
                        label="Correo"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.telefono"
                        label="Telefono"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.pais"
                        label="Pais"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">¿Desea eliminar agente?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </template>
  
  <script lang="ts">
    export default {
      data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
          {
            text: 'User',
            align: 'start',
            sortable: false,
            value: 'n',
          },
          { text: 'Nombre', value: 'nombre' },
          { text: 'Correo', value: 'correo' },
          { text: 'Teléfono', value: 'telefono' },
          { text: 'País', value: 'pais' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        user: [],
        editedIndex: -1,
        editedItem: {
          n: 0,
          nombre: '',
          correo: '',
          telefono: 0,
          pais: '',
        },
        defaultItem: {
          n: 0,
          nombre: '',
          correo: '',
          telefono: 0,
          pais: '',
        },
      }),
  
      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'Nuevo Usuario' : 'Editar Usuario'
        },
      },
  
      watch: {
        dialog (val) {
          val || this.close()
        },
        dialogDelete (val) {
          val || this.closeDelete()
        },
      },
  
      created () {
        this.initialize()
      },
  
      methods: {
        initialize () {
          this.user = [
            {
              n: 1,
              nombre: 'Pilar Cortez',
              correo: 'pilar.cortezp@alloxentric.cl',
              telefono: 9876543,
              pais: 'Chile',
            },
            {
              n: 2,
              nombre: 'Luciano Grandi',
              correo: 'luciano.grandim@alloxentric.cl',
              telefono: 9876543,
              pais: 'Chile',
            },
            {
              n: 3,
              nombre: 'Francisco Garcia',
              correo: 'francisco.garciag@alloxentric.cl',
              telefono: 9876543,
              pais: 'Chile',
            },
            {
              n: 4,
              nombre: 'Nicole Saéz',
              correo: 'nicole.saezt@alloxentric.cl',
              telefono: 9876543,
              pais: 'Chile',
            },
            {
              n: 5,
              nombre: 'Juan Rojas',
              correo: 'juan.rojass@alloxentric.cl',
              telefono: 9876543,
              pais: 'Chile',
            },
          ]
        },
  
        editItem (item) {
          this.editedIndex = this.user.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
        },
  
        deleteItem (item) {
          this.editedIndex = this.user.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialogDelete = true
        },
  
        deleteItemConfirm () {
          this.user.splice(this.editedIndex, 1)
          this.closeDelete()
        },
  
        close () {
          this.dialog = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        closeDelete () {
          this.dialogDelete = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        save () {
          if (this.editedIndex > -1) {
            Object.assign(this.user[this.editedIndex], this.editedItem)
          } else {
            this.user.push(this.editedItem)
          }
          this.close()
        },
      },
    }
  </script>