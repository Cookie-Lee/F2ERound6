import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify' // path to vuetify export
import axios from 'axios' //axios用於對api存取
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(Vuex)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
