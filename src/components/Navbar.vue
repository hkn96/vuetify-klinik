<template lang="">
  <nav>
    <v-app-bar color="grey lighten-1" elevation="1" dark app flat>
      <v-app-bar-nav-icon id="drawerIcon" size="48px" @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <img class="mr-3" :src="require('../assets/analytics.png')" height="35" />
      <span class="font-weight-light d-none d-sm-flex">Team</span>
      <strong class=" font-weight-medium d-none d-sm-flex">HFH</strong>
      <v-switch
        color="black"
        value="black"
        label="Dunkel"
        class="mt-5 ml-4"
        v-model="$vuetify.theme.dark"
      ></v-switch>

      <v-toolbar-title class="white--text"> </v-toolbar-title>

      <v-flex class="d-flex flex-row justify-end" xs12 sm12 md12 lg12>
        <v-btn
          rounded
          elevation="1"
          text
          small
          color="black"
          class="my-5 mr-2  white--text d-none d-sm-flex"
          router
          to="/"
        >
          <v-icon>mdi-home</v-icon>Home</v-btn
        >

        <v-btn
          rounded
          elevation="1"
          text
          small
          color="black"
          class="my-5 mr-2  white--text  d-none d-sm-flex "
          router
          to="/Cards"
        >
          <v-icon>mdi-hospital-building</v-icon>Kliniken</v-btn
        >
        <v-btn
          rounded
          elevation="1"
          small
          color="error"
          class="my-5 mr-2   white--text "
          href="https://fahricigdem.github.io/klinikbewertungen-react/"
          >Experten</v-btn
        >
      </v-flex>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="grey darken-3">
      <v-layout column align-center>
        <v-flex class="my-5">
          <v-img
            align-center
            max-width="100px"
            class="my-5"
            src="../assets/analytics.png"
          ></v-img>
        </v-flex>
      </v-layout>

      <v-list flat>
        <v-list-item
          v-for="link in links"
          :key="link.route"
          link
          :to="link.route"
          exact="true"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      props: {
        attrs: {
          type: Object,
          default: () => ({}),
        },
      },
      drawer: false,

      links: [
        { icon: 'mdi-home', text: 'Home', route: '/' },

        {
          icon: 'mdi-forum',
          text: 'Kontakt ',
          route: '/Kontakt',
        },

        {
          icon: 'mdi-forum',
          text: 'Über Uns',
          route: '/Uberuns',
        },
        {
          icon: 'mdi-hospital-building',
          text: 'Kliniken',
          route: '/Cards',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
