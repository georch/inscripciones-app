import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const mutations = {
  LOGIN_USER(state) {
    state.isLogged = true;
  },

  LOGOUT_USER(state) {
    state.isLogged = false;
  },
};

const state = {
  isLogged: !!localStorage.getItem('token'),
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
});
