<template>
  <nav class="navbar has-shadow">
    <div class="navbar-tabs">
      <div class="navbar-start">
        <router-link class="navbar-item is-tab" to="/" exact>
          Inicio
        </router-link>
        <router-link v-if="isLogged" class="navbar-item is-tab" to="/logout" exact>
          Terminar sesión
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import store from '@/store';

export default {
  name: 'NavBar',

  computed: {
    isLogged() {
      return store.state.isLogged;
    },
  },
};
</script>
