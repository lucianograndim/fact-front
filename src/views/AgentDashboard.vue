<template>
  <v-card>
    <Agent-Sidebar />
    <router-view></router-view>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AgentSidebar from '@/components/util/AgentSidebar.vue';
import AppBar from '@/components/util/AppBar.vue';
@Component({
  name: 'AgentDashboard',
  components: {
    AgentSidebar,
  },
})
export default class AgentDashboard extends Vue {
  public message = this.$t("Main.message");

}
</script>