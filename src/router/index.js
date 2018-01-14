import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/authentication/Login';
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
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
  linkExactActiveClass: 'is-active',
});
