import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import axios from 'axios';

import 'semantic-ui-less/semantic.less'
import SuiVue from 'semantic-ui-vue';

import 'vuetify/dist/vuetify.min.css'

Vue.use(SuiVue);
Vue.use(Vuetify);

Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  render: h => h(App)
});
