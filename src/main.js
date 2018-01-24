// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import fontawesome from '@fortawesome/fontawesome';
import {
  faEnvelope,
  faLock,
} from '@fortawesome/fontawesome-free-solid';

import Vue from 'vue';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store';
import notificationMixin from './mixins/notificationMixin';

fontawesome.library.add(faEnvelope, faLock);

// Require the main Sass manifest file
require('./assets/sass/main.scss');

Vue.config.productionTip = false;

// Set Axios default settings
axios.defaults.baseURL = 'http://localhost:8020/';
axios.defaults.headers.common['content-type'] = 'application/x-www-form-urlencoded';

Vue.mixin(notificationMixin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
