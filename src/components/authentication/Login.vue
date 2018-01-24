<template>
  <div class="login">
    <h2 class="title">Ingresar</h2>
    <form class="login-forma" v-on:submit.prevent="login">
      <InputField
        icon="fa-envelope"
        name="email"
        placeholder="E-mail"
        rules="required|email"
        type="email"
        v-model="email"
      />
      <InputField
        icon="fa-lock"
        name="password"
        placeholder="Password"
        rules="required"
        type="password"
        v-model="password"
      />
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
import Vue from 'vue';
import axios from 'axios';
import es from 'vee-validate/dist/locale/es';
import VeeValidate, { Validator } from 'vee-validate';
import InputField from '@/components/forms/InputField';

Validator.localize('es', es);
Vue.use(VeeValidate, {
  aria: true,
  inject: false,
});

export default {
  name: 'Login',
  inject: ['$validator'],
  components: {
    InputField,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  beforeCreate() {
    if (this.$store.state.isLogged) {
      this.$router.push('/');
    }
  },
  methods: {
    async login() {
      this.$store.commit('removeAllNotifications');
      const validationPass = await this.$validator.validateAll();

      if (validationPass) {
        try {
          const res = await axios.post('auth/login', {
            email: this.email,
            password: this.password,
          });

          localStorage.setItem('token', res.data.token);
          this.$store.commit('LOGIN_USER');
          this.$router.push('/');
        } catch (err) {
          this.password = '';
          this.$error('No fue posible entrar. Por favor, intente de nuevo.');
        }
      } else {
        this.$error('Revise los campos obligatorios.');
      }
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
