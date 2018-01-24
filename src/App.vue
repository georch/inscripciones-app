<template>
  <div id="app">
    <Header />
    <Notifications />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Notifications from './components/content/Notifications';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Notifications,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
