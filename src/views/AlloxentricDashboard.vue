<template>
  <v-card :elevation=0>
    <Alloxentric-Sidebar />
    <router-view></router-view>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AlloxentricSidebar from '@/components/util/AlloxentricSidebar.vue';

@Component({
  name: 'AlloxentricDashboard',
  components: {
    AlloxentricSidebar,
  },
})
export default class AlloxentricDashboard extends Vue {
  public message = this.$t("Main.message");

}
</script>