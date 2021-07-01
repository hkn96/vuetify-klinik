<template >
  <v-container class="grey lighten-5">
    <v-row>
      <v-col cols="12" md="12">
        <v-img
          elevation="20"
          height="160"
          src="../assets/team/team5.jpg"
        ></v-img>
      </v-col>
    </v-row>

    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <v-row>
      <v-col v-for="card in cards" :key="card" cols="12" md="4" xs="6">
        <v-card
          elevation="20"
          v-riple
          hover
          flat
          tile
          width="100%"
          class="grey lighten-4 text-start"
        >
          <v-img class="zoom" width="100%" height="300" :src="card"> </v-img>
          <v-col cols="auto">
            <v-dialog transition="dialog-bottom-transition" max-width="600">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mt-0 text-start"
                  small
                  color="red lighten-1 white--text"
                  v-bind="attrs"
                  v-on="on"
                  >{{ card.title }}</v-btn
                >
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar color="error" dark>{{ card.title }}</v-toolbar>
                  <v-card-text>
                    <div class="text-h6 pa-12">{{ card.text }}</div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>

          <v-card-subtitle class="mt-0  text-h6">
            {{ card.sub }}
          </v-card-subtitle>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" v-bind="attrs" v-on="on"
              >From the bottom</v-btn
            >
          </template>
          <v-divider></v-divider>

          <v-card-text class="grey lighten-3 text-center">
            <v-btn
              color="red lighten-1 mx-0"
              v-for="icon in icons"
              :key="icon"
              icon
            >
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.zoom {
  transition: transform 1s, filter 1.5s ease-in-out;
  filter: grayscale(100%);
}
.zoom:hover {
  filter: grayscale(0);
  transform: scale(1.05);
}
</style>
<script>
export default {
  data: () => ({
    cards: [
      {
        icon: 'mdi-xing',
        text:
          'Lorem ipsum carrots enhanced rebates. Most flexibl Lorem ipsum carrots enhanced rebates. Most flexibl Lorem ipsum carrots enhanced rebates. Most flexibl',
        src: require('../assets/team/fahri.jpeg'),
        sub: 'Data Scientist',
        title: 'Fahri Çiğdem',
      },

      {
        icon: 'mdi-linkedin',
        text:
          'Lorem ipsum carrots enhanced rebates. Most flexibl Lorem ipsum carrots enhanced rebates. Most flexibl Lorem ipsum carrots enhanced rebates. Most flexibl',
        sub: 'Web Entwickler',
        title: 'Hakan Ünlü',
        src: require('../assets/team/t.png'),
      },
      {
        icon: 'mdi-github',
        text:
          'Lorem ipsum carrots enhanced rebates. Most flexibl Lorem ipsum carrots enhanced rebates. Most flexibl Lorem ipsum carrots enhanced rebates. Most flexibl',
        sub: 'App Entwickler',
        title: 'Al_Azzawi Hussain',
        src: require('../assets/team/Hussain.jpeg'),
      },
    ],
    icons: ['mdi-twitter', 'mdi-linkedin', 'mdi-xing', 'mdi-github'],
  }),
};
</script>
