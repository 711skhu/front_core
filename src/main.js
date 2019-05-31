import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'

import 'semantic-ui-less/semantic.less'
import SuiVue from 'semantic-ui-vue';

import 'vuetify/dist/vuetify.min.css'

import VueSplit from 'vue-split-panel'

Vue.use(SuiVue);
Vue.use(Vuetify);
Vue.use(VueSplit);

new Vue({
  el: '#app',
  render: h => h(App)
});
