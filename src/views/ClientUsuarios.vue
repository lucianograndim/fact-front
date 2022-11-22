<template>
  <v-data-table
    :headers="headers"
    :items="id"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>HISTORICO FACTURAS</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template v-slot:item.documento="{ item }">
      <v-icon
        small
        @click="deleteItem(item)"
      >
      mdi-file-pdf-box
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
          text: '#',
          align: 'start',
          sortable: false,
          value: 'n',
        },
        { text: 'Moneda', value: 'moneda', sortable: false },
        { text: 'De', value: 'de', sortable: false },
        { text: 'Tipo', value: 'tipo', sortable: false },
        { text: 'Fecha', value: 'fecha', sortable: false },
        { text: 'Despósito', value: 'deposito', sortable: false },
        { text: 'Documento', value: 'documento', sortable: false },
        ],
        id: [],
        editedIndex: -1,
        editedItem: {
          n: 0,
          moneda: '$',
          de: 'Alloxentric',
          tipo: 'fb',
          fecha: 'd',
          deposito: 0,
        },
        defaultItem: {
          n: 0,
          moneda: '$',
          de: 'Alloxentric',
          tipo: 'fb',
          fecha: 'd',
          deposito: 0,
        },
      }),

      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
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
          this.id = [
            {
              n: 1,
              moneda: '$',
              de: 'Alloxentric',
              tipo: 'Boleta',
              fecha: '30/07/2022',
              deposito: 1234567,
            },
            {
              n: 2,
              moneda: '$',
              de: 'Alloxentric',
              tipo: 'Boleta',
              fecha: '29/07/2022',
              deposito: 1234567,
            },
            {
              n: 3,
              moneda: '$',
              de: 'Alloxentric',
              tipo: 'Boleta',
              fecha: '31/08/2022',
              deposito: 1234567,
            },
            {
              n: 4,
              moneda: '$',
              de: 'Alloxentric',
              tipo: 'Factura',
              fecha: '28/06/2022',
              deposito: 1234567,
            },
            {
              n: 5,
              moneda: '$',
              de: 'Alloxentric',
              tipo: 'Factura',
              fecha: '30/05/2022',
              deposito: 1234567,
            },
            {
              n: 6,
              moneda: '$',
              de: 'Alloxentric',
              tipo: 'Boleta',
              fecha: '29/09/2022',
              deposito: 1234567,
            },
            {
              n: 7,
              moneda: '$',
              de: 'Alloxentric',
              tipo: 'Boleta',
              fecha: '31/10/2022',
              deposito: 312345672,
            },
            {
              n: 8,
              moneda: '$',
              de: 'Alloxentric',
              tipo: 'Factura',
              fecha: '15/11/2022',
              deposito: 1234567,
            },
            {
              n: 9,
              moneda: '$',
              de: 'Alloxentric',
              tipo: 'Boleta',
              fecha: '28/07/2022',
              deposito: 1234567,
            },
            {
              n: 10,
              moneda: '$',
              de: 'Alloxentric',
              tipo: 'Factura',
              fecha: '20/12/2022',
              deposito: 1234567,
            },
          ]
        },

      editItem (item) {
        this.editedIndex = this.id.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.id.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.id.splice(this.editedIndex, 1)
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
          Object.assign(this.id[this.editedIndex], this.editedItem)
        } else {
          this.id.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
