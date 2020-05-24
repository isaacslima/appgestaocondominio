import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'

require('firebase/firestore')
 
Vue.use(VueFirestore)

var firebaseApp = Firebase.initializeApp({ 
 })
 
const firestore = firebaseApp.firestore();


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  firestore () {
    return {
        // Collection
        condomino: firestore.collection('condomino'),
        // Doc
        ford: firestore.collection('cars').doc('ford')
    }
  },
  render: h => h(App)
}).$mount('#app')
