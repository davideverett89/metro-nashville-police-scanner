import Vue from 'vue'
import App from './App.vue'
import Router from './router/index';

import './styles/index.scss';

Vue.config.productionTip = false

new Vue({
  Router,
  render: h => h(App),
}).$mount('#app')
