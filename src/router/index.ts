import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import keycloak from '@/main'
//import pdfView from '../views/pdfView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'dashboard',
    component: function (){
      keycloak.updateToken(-1)
      if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_CLIENT_ROLE)){
        return import('../views/ClientDashboard.vue')
      }
      if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_AGENT_ROLE)){
        return import('../views/AgentDashboard.vue')
      }
      if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_ALLOXENTRIC_ROLE)){
        return import('../views/AlloxentricDashboard.vue')
      }
      else{
        return import('../views/RoleMenu.vue')
      }
    },
    children: [
      {
        path: '/inicio',
        name: 'Inicio',
        component: function (){
          keycloak.updateToken(-1)
          if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_CLIENT_ROLE)){
            return import('../views/ClientInicio.vue')
          }
          if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_AGENT_ROLE)){
            return import('../views/AgentInicio.vue')
          }
          if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_ALLOXENTRIC_ROLE)){
            return import('../views/AlloxentricInicio.vue')
          }
          else{
            return import('../views/RoleMenu.vue')
          }
        }
      },
      {
        path: '/usuarios',
        name: 'Usuarios',
        component: function (){
          keycloak.updateToken(-1)
          if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_CLIENT_ROLE)){
            return import('../views/ClientUsuarios.vue')
          }
          if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_AGENT_ROLE)){
            return import('../views/NoAccess.vue')  
          }
          if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_ALLOXENTRIC_ROLE)){
            return import('../views/AlloxentricUsuarios.vue')
          }
          else{
            return import('../views/RoleMenu.vue')
          }
        }
      },
      {
        path: '/client',
        name: 'AlloxentricClient',
        component: function (){
          keycloak.updateToken(-1)
          if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_CLIENT_ROLE)){
            return import('../views/NoAccess.vue') 
          }
          if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_AGENT_ROLE)){
            return import('../views/NoAccess.vue')  
          }
          if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_ALLOXENTRIC_ROLE)){
            return import('../views/AlloxentricClient.vue')
          }
          else{
            return import('../views/RoleMenu.vue')
          }
        } 
      },
      {
        path: '/agent',
        name: 'AlloxentricAgent',
        component: function (){
          keycloak.updateToken(-1)
          if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_CLIENT_ROLE)){
            return import('../views/NoAccess.vue') 
          }
          if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_AGENT_ROLE)){
            return import('../views/NoAccess.vue')  
          }
          if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_ALLOXENTRIC_ROLE)){
            return import('../views/AlloxentricAgent.vue')
          }
          else{
            return import('../views/RoleMenu.vue')
          }
        } 
      }
    ]
  },
  {
    path: '/rolemenu',
    name: 'Rolemenu',
    component: function (){
      keycloak.updateToken(-1)
      if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_CLIENT_ROLE)){
        return import('../views/ClientDashboard.vue')
      }
      if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_AGENT_ROLE)){
        return import('../views/AgentDashboard.vue')
      }
      if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_ALLOXENTRIC_ROLE)){
        return import('../views/AlloxentricDashboard.vue')
      }
      else{
        return import('../views/RoleMenu.vue')
      }
    }
  },
  //{
   // path: '/signupalloxentric',
   // name: 'AlloxentricForm',
   // component: () => import('../views/AlloxentricForm.vue')
  //},
  //{
  //  path: '/signupproveedor',
  //  name: 'ProveedorForm',
  //  component: () => import('../views/ProveedorForm.vue')
 // },
  {
    path: '/signupagent',
    name: 'AgentForm',
    component: function (){
      keycloak.updateToken(-1)
      if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_CLIENT_ROLE)){
        return import('../views/ClientDashboard.vue')
      }
      if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_AGENT_ROLE)){
        return import('../views/AgentDashboard.vue')
      }
      if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_ALLOXENTRIC_ROLE)){
        return import('../views/AlloxentricDashboard.vue')
      }
      else{
        return import('../views/AgentForm.vue')
      }
    }
  },
  {
    path: '/signupclient',
    name: 'ClientForm',
    component: function (){
      keycloak.updateToken(-1)
      if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_CLIENT_ROLE)){
        return import('../views/ClientDashboard.vue')
      }
      if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_AGENT_ROLE)){
        return import('../views/AgentDashboard.vue')
      }
      if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_ALLOXENTRIC_ROLE)){
        return import('../views/AlloxentricDashboard.vue')
      }
      else{
        return import('../views/ClientForm.vue')
      }
    }
  },
  {
    path: '/demo',   //agregar validación (acceso solo si no esta validado)
    name: 'Demo',
    component: () => import('../views/Demo.vue')
  },
  {
    path: '/403',   
    name: 'NoAccess',
    component: () => import('../views/NoAccess.vue')
  },
  /*{
    path: '/pdfview',
    name: 'pdf',
    component: pdfView
    }*/
    {
      path: '/pdf',
      name: 'pdfView',
      component: function (){
        keycloak.updateToken(-1)
        if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_CLIENT_ROLE)){
          return import('../views/ClientDashboard.vue')
        }
        if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_AGENT_ROLE)){
          return import('../views/AgentDashboard.vue')
        }
        if(keycloak.hasResourceRole(process.env.VUE_APP_KEYCLOAK_ALLOXENTRIC_ROLE)){
          return import('../views/AlloxentricDashboard.vue')
        }
        else{
          return import('../views/pdfView.vue')
        }
      }
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router

