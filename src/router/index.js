import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component:  () => import(/* webpackChunkName: "Login" */"../components/Login")
    },
    {
      path: '/condominos',
      name: 'Condominos',
      component:  () => import(/* webpackChunkName: "Condominos" */"../components/Condominiums")
    },
    {
      path: '/cadastrar-condomino',
      name: 'CadastrarCondomino',
      component:  () => import(/* webpackChunkName: "CadastrarCondominos" */"../components/InsertCondominiums")
    },
    {
      path: '/cadastrar',
      name: 'Cadastrar',
      component:  () => import(/* webpackChunkName: "Cadastrar" */"../components/SiginUpCondominiums")
    }
  ]
})