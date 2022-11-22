<template>
	<v-navigation-drawer
		app
		width="290"
		dark
		permanent
    class="d-flex justify-space-between">
    <v-container>
      <v-list-item>
              <v-list-item-content>
          <v-list-item-title>
              <img src="@/assets/Alloxentric-logo-white.png" width="190" height="45"/>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list>
        <v-list-item-title class=text-center>
                  Menú 
        </v-list-item-title>
        <v-divider></v-divider>
              <v-list-group
          class="justify-content-between"
          v-for="(item, i) in items"
          :key="i"
          :v-model="selected"
          active-class="active"
          color="#06B7B2"
                  @click="changeRoute(item)"
        >
          <template v-slot:activator >
            <v-list-item-icon class="mr-0">
        
            </v-list-item-icon>
            <v-list-item-content >
            <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>
          
        </v-list-group>
      </v-list>      
    </v-container>
    <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="listenLogout">
            Cerrar Sesión
          </v-btn>
        </div>
      </template>
	</v-navigation-drawer>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import { INavigator } from '@/model/util/INavigator'; 

@Component({
    name: 'AgentSidebar'
    })
    
  
	export default class AgentSidebar {
		public selected = 0;
		private currentRoute = '';
		public items: Array<INavigator> = [
				{
					title: 'Inicio' as string,
					urlName: 'Inicio',
					parent: 'dashboardInicio',
					subMenus: [],
				}
		]
		public changeRoute(to: INavigator) {
				if (to.title === 'Salir') {
					//this.logout();
					//Util.showMessage('Hasta pronto', Icon.INFO);
					this.$router.push({
						name: 'home',
					});
					//this.keycloak.logout();
					return;
				}
				if (
					to.urlName !== this.currentRoute &&
					to.urlName !== undefined
				) {
					this.currentRoute = to.parent;
					this.$router.push({
						name: to.urlName,
					});
				}
			}
      public listenLogout() {
            //this.logout();
            //Util.showMessage('Hasta pronto', Icon.INFO);
            this.$router.push({
                name: 'Login',
            });
            //this.keycloak.logout();
      }

    }
</script>

<style scoped>
	.active {
		background-color: transparent;
	}
</style>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;800;900&display=swap');

.v-application {
  font-family: "nunito", sans-serif !important;
}
</style>
