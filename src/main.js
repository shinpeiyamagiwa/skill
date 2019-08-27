import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

import vuetify from './plugins/vuetify'
import router from './router'


Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCWgJdbibqqnexD_oSjM_MzJ4RosMlIhF4",
  authDomain: "calculate-oee.firebaseapp.com",
  databaseURL: "https://calculate-oee.firebaseio.com",
  projectId: "calculate-oee",
  storageBucket: "calculate-oee.appspot.com",
  messagingSenderId: "141898278421",
  appId: "1:141898278421:web:492340382ad88ec6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

