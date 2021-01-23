import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import * as VueGoogleMaps from 'vue2-google-maps'

import apiKeys from './helpers/apiKeys.json';

import './styles/index.scss';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: apiKeys.googleMapsAPIKey
  },
  installComponents: true
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
