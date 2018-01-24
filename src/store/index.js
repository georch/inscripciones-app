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

  addNotification(state, notification) {
    state.notifications.push(notification);
  },

  removeNotification(state, notification) {
    state.notifications.splice(state.notifications.indexOf(notification), 1);
  },
};

const state = {
  isLogged: !!localStorage.getItem('token'),
  notifications: [],
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
});
