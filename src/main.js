import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import axios from 'axios'

import 'semantic-ui-less/semantic.less'
import SuiVue from 'semantic-ui-vue';

import 'vuetify/dist/vuetify.min.css'
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 8d349c125e63364dfc7092ede3c1a2592cc52a51
=======
>>>>>>> hotfix-v0.0.1-problem-comment-fix
import VueSplit from 'vue-split-panel'

Vue.use(SuiVue);
Vue.use(Vuetify);
Vue.use(VueSplit);

Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  render: h => h(App)
});
