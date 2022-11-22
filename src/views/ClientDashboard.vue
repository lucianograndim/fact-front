<template>
  <v-card>
    <Client-Sidebar />
    <router-view></router-view>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ClientSidebar from '@/components/util/ClientSidebar.vue';
@Component({
  name: 'ClientDashboard',
  components: {
    ClientSidebar,
  },
})
export default class ClientDashboard extends Vue {
  public message = this.$t("Main.message");

}
</script>