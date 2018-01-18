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
        <router-link v-if="!isLogged" class="navbar-item is-tab" to="/register" exact>
          Crear usuario
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',

  computed: {
    isLogged() {
      return this.$store.state.isLogged;
    },
  },
};
</script>
