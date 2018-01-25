<template>
  <div class="register content">
    <div class="forma">
      <h2 class="title">Crear cuenta</h2>
      <form v-on:submit.prevent="register" novalidate>
        <div class="subtitle">Datos personales</div>
        <InputField
          name="nombre"
          placeholder="Nombre completo"
          rules="required"
          type="text"
          v-model="nombre"
        />
        <div class="subtitle">Datos de acceso</div>
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
          rules="required|min:6"
          type="password"
          v-model="password"
        />
        <InputField
          icon="fa-lock"
          name="password_confirmation"
          placeholder="Confirme su password"
          rules="required"
          type="password"
          v-model="password_confirmation"
          vvAS="password"
        />
        <div class="field">
          <div class="control">
            <button class="button is-link is-medium is-fullwidth">
              Crear cuenta
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="columns is-centered">
      <div class="column is-6">
        <div class="content">
          <h4 class="has-text-centered">Aviso de Privacidad</h4>
          <p>
            Sus datos personales en el FICM están protegidos conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
            Consulte el aviso de privacidad a través de nuestra página en internet <a href="http://www.moreliafilmfest.com" target="_blank" rel="noreferrer" data-ss1515918490="1">www.moreliafilmfest.com</a>
            mismo que podrá ser modificado de tiempo en tiempo por el Festival Internacional del Cine en Morelia, A.C.
          </p>
        </div>
      </div>
		</div>
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
  name: 'Register',
  inject: ['$validator'],
  components: {
    InputField,
  },
  data() {
    return {
      nombre: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
  },
  beforeCreate() {
    if (this.$store.state.isLogged) {
      this.$router.push('/');
    }
  },
  methods: {
    async register() {
      this.$store.commit('removeAllNotifications');
      const validationPass = await this.$validator.validateAll();

      if (validationPass) {
        try {
          await axios.post('auth/register', {
            nombre: this.nombre,
            email: this.email,
            password: this.password,
          });
          this.$router.push('/');
        } catch (err) {
          this.password = '';
          this.password_confirmation = '';
          this.$error('No fue posible crear la cuenta. Por favor, intente de nuevo.');
        }
      } else {
        this.$error('Revise los campos obligatorios.');
      }
    },
  },
};
</script>

<style scoped>
.forma {
  margin: 15px auto;
  padding: 15px;
  max-width: 330px;
}
h2.title {
  margin-bottom: 10px;
}
.subtitle {
  margin-bottom: 5px;
}
</style>
