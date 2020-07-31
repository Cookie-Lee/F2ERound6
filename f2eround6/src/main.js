import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify' // path to vuetify export
import axios from 'axios' //axios用於對api存取

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
