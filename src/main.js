// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import fontawesome from '@fortawesome/fontawesome';
import {
  faEnvelope,
  faLock,
} from '@fortawesome/fontawesome-free-solid';

import Vue from 'vue';
import App from './App';
import router from './router';

fontawesome.library.add(faEnvelope, faLock);

// Require the main Sass manifest file
require('./assets/sass/main.scss');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
