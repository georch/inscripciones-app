<template>
</template>

<script>
import router from '@/router';

export default {
  name: 'logout',

  mounted() {
    localStorage.removeItem('token');
    this.$store.commit('LOGOUT_USER');
    router.push('login');
  },
};
</script>
