<template lang="">
  <v-app id="scroll-target">
    <Navbar />
    <v-content>
      <router-view></router-view>
      <router-view name="Cards"></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>
