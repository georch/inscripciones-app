<template>
  <header>
    <h1>
      <router-link to="/" exact>
        <img src="@/assets/header_sistema.gif">
      </router-link>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  margin-bottom: 10px;
  text-align: center;
}
</style>
