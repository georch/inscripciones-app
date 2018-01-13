<template>
  <header>
    <h1>
      <router-link to="/" exact>
        <img src="@/assets/header_sistema.gif">
      </router-link>
    </h1>
    <NavBar />
  </header>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'Header',
  components: {
    NavBar,
  },
};
</script>

<style scoped>
header {
  margin-bottom: 10px;
  text-align: center;
}
</style>
