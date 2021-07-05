<template>
  <v-container>
    <v-row>
      <!-- Klinikbewertungen carousel -->
      <v-col cols="9">
        <v-card
          fill-height
          elevation="24"
          class="mx-auto my-3"
          v-if="show"
          color="white"
        >
          <v-carousel
            :continuous="true"
            :show-arrows="true"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="430"
          >
            <v-carousel-item
              aspect-ratio="2"
              contain
              v-for="(slide, i) in images"
              :key="i"
              :src="slide.src"
            >
              <strong class="my-1">
                {{ slide.name }}
              </strong>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <!-- Switch button -->

      <v-col cols="3" class="my-4">
        <v-switch
          contain
          v-if="show"
          class=" mx-2 "
          v-model="show"
          color="grey lighten-1"
          label="Quelle auswählen"
        ></v-switch>
        <strong v-if="show" class="green--text mx-2 mb-2"
          >Klinikbewertungen.de</strong
        >
      </v-col>
    </v-row>

    <!-- GoogleMaps carousel -->
    <v-row>
      <v-col cols="9">
        <v-card
          elevation="24"
          class="mx-auto my-1"
          xs12
          sm6
          md6
          lg3
          v-if="!show"
          color="white"
        >
          <v-carousel
            :continuous="true"
            :show-arrows="true"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="440"
          >
            <v-carousel-item
              contain
              aspect-ratio="2"
              xs12
              sm6
              md4
              lg3
              v-for="(slide, i) in googleimages"
              :key="i"
              :src="slide.src"
            >
              <strong class="pt-16">
                {{ slide.name }}
              </strong>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <!-- Switch button -->
      <v-col cols="3" class="my-4">
        <v-switch
          contain
          label="Quelle auswählen"
          v-if="!show"
          class=" mx-2 "
          v-model="show"
          color="grey lighten-1"
        ></v-switch>
        <storng v-if="!show" class="red--text mx-2 mb-2">GoogleMaps</storng>
      </v-col>
    </v-row>

    <!-- Klinikbewertungen data -->

    <v-card
      elevation="10"
      tile
      class=" my-6 rounded-lg  "
      xs12
      sm6
      md4
      lg3
      v-if="show"
    >
      <v-card-title>
        Kliniken

        <span class="red--text subtitle-1  mx-7"
          >{{ kjson.length }} Kommantare gefunden
        </span>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        dense
        :items-per-page="5"
        :headers="headers"
        :items="klinikdaten"
        :search="search"
        class="elevation-1 text-sm-center "
      >
        <template v-slot:item.gesamt="{ item }">
          <v-chip :color="getFarbe(item.gesamt)" dark>
            {{ item.gesamt }}
          </v-chip>
        </template>

        <template v-slot:item.positive="{ item }">
          <v-chip :color="getPos(item.positive)" dark>
            {{ item.positive }}
          </v-chip>
        </template>
      </v-data-table>
    </v-card>

    <!-- GoogleMaps data -->

    <v-card
      elevation="10"
      xs12
      sm6
      md4
      lg3
      tile
      class=" my-6 rounded-lg  "
      v-if="!show"
    >
      <v-card-title>
        Kliniken

        <span class="red--text subtitle-1  mx-7"
          >{{ gjson.length }} Kommantare gefunden
        </span>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        contain
        dense
        :items-per-page="5"
        :headers="headgoogle"
        :items="google"
        :search="search"
        class="elevation-5 text-sm-center "
      >
        <template v-slot:item.sterne="{ item }">
          <v-chip :color="getColor(item.sterne)" dark>
            {{ item.sterne }}
          </v-chip>
        </template>
        <template v-slot:item.positive="{ item }">
          <v-chip :color="getPos(item.positive)" dark>
            {{ item.positive }}
          </v-chip>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
import kjson from '../assets/klinik by klinik json/Krankenhaus Buchholz_klinikDe.json';
import gjson from '../assets/klinik by klinik json/Krankenhaus Buchholz_googleMaps.json';

export default {
  data() {
    return {
      search: '',
      page: 1,
      kjson,
      gjson,
      show: true,

      headers: [
        {
          text: 'Kliniken',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'Titel', value: 'titel' },
        {
          text: 'Kommentar',
          value: 'komment',
          align: 'start',
        },
        { text: 'Gesamtzufriedenheit', value: 'gesamt' },
        { text: 'Positive', value: 'positive' },
        { text: 'Quelle', value: 'source' },
      ],
      klinikdaten: kjson,

      headgoogle: [
        {
          text: 'Kliniken',
          align: 'start',
          sortable: true,
          value: 'name',
        },

        { text: 'Kommentar', value: 'komment' },
        { text: 'Sterne', value: 'sterne' },
        { text: 'Positive', value: 'positive' },
        { text: 'Quelle', value: 'source' },
      ],
      google: gjson,

      images: [
        {
          name: 'FachbereichPolarities ',
          src: require('../images-klinikbewertungen/FachbereichPolarities/FachbereichPolarities_Krankenhaus Buchholz.png'),
        },
        {
          name: 'PolaritiyProJahr',
          src: require('../images-klinikbewertungen/PolaritiyProJahr/PolaritiyProJahr_Krankenhaus Buchholz.png'),
        },
        {
          name: 'KommentareProJahr ',
          src: require('../images-klinikbewertungen/KommentareProJahr/KommentareProJahr_Krankenhaus Buchholz.png'),
        },
        {
          name: 'PositiveNegativeProJahr ',
          src: require('../images-klinikbewertungen/PositiveNegativeProJahr/PositiveNegativeProJahr_Krankenhaus Buchholz.png'),
        },
      ],
      googleimages: [
        {
          name: 'PolaritiyProJahr',
          src: require('../images-google/PolaritiyProJahr/PolaritiyProJahr_Krankenhaus Buchholz_google.png'),
        },
        {
          name: 'KommentareProJahr ',
          src: require('../images-google/KommentareProJahr/KommentareProJahr_Krankenhaus Buchholz_google.png'),
        },
        {
          name: 'PositiveNegativeProJahr ',
          src: require('../images-google/PositiveNegativeProJahr/PositiveNegativeProJahr_Krankenhaus Buchholz_google.png'),
        },
      ],
    };
  },

  methods: {
    getColor(sterne) {
      if (sterne === 5) return 'success';
      else if (sterne === 4) return 'primary';
      else if (sterne === 3) return 'warning';
      else if (sterne === 2) return 'yellow';
      else if (sterne === 1) return 'error';
    },
    getFarbe(gesamt) {
      if (gesamt === 'sehr zufrieden') return 'success';
      else if (gesamt === 'zufrieden') return 'primary';
      else if (gesamt === 'weniger zufrieden') return 'warning';
      else if (gesamt === 'unzufrieden') return 'error';
    },
    getPos(positive) {
      if (positive === 1) return 'success';
      else if (positive === 0) return 'error';
    },
  },
};
</script>
<style lang=""></style>
