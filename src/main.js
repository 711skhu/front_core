import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import axios from 'axios';

import 'semantic-ui-less/semantic.less'
import SuiVue from 'semantic-ui-vue';

import 'vuetify/dist/vuetify.min.css'

import VueSplit from 'vue-split-panel'

Vue.use(SuiVue);
Vue.use(Vuetify);
Vue.use(VueSplit);

axios.defaults.baseURL= "http://dev.oj.shouwn.com";
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App)
});
