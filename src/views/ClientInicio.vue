<template>
  <div class>
    <v-row justify="center" class="text-center">
      <v-col col="12" sm="6" md="6"  style="padding-top:3rem">

      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator';
 @Component({
   name: 'ClientInicio',
 })
 export default class ClientInicio extends Vue {
   public message = this.$t("Main.message");

 }
</script>
