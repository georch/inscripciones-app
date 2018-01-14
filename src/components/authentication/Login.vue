<template>
  <div class="login">
    <h2 class="title">Ingresar</h2>
    <form class="login-forma" v-on:submit.prevent="login">
      <div class="notification is-danger" v-if="infoError">
        No fue posible entrar. Por favor, intente de nuevo.
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input v-model.trim="email" class="input" type="email" placeholder="E-mail" required>
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input  v-model.trim="password" class="input" type="password" placeholder="Password" required>
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-link is-medium is-fullwidth">
            Entrar
          </button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';
import store from '@/store';

export default {
  name: 'Login',
  data() {
    return {
      infoError: false,
      email: '',
      password: '',
    };
  },
  beforeCreate() {
    if (store.state.isLogged) {
      router.push('/');
    }
  },
  methods: {
    login() {
      this.infoError = false;

      axios.post('auth/login', {
        email: this.email,
        password: this.password,
      }).then((response) => {
        localStorage.setItem('token', response.data.token);
        store.commit('LOGIN_USER');
        router.push('/');
      }).catch(() => {
        this.infoError = true;
        this.password = '';
      });
    },
  },
};
</script>

<style scoped>
.login {
  margin: 15px auto;
  padding: 15px;
  max-width: 330px;
}
h2.title {
  margin-bottom: 10px;
}
</style>
