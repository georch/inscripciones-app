import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
  ],
  linkExactActiveClass: 'is-active',
});
