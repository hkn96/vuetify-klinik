<template lang="">
  <v-container fluid class="grey lighten-5">
    <v-row class="mb-3" dense>
      <v-card
        v-ripple
        hover
        v-for="n in KlinikDaten"
        :key="n"
        elevation="10"
        tile
        class="mx-auto my-12 rounded-lg "
        max-width="400"
        max-height="500"
        :to="n.route"
      >
        <v-img height="200" :src="n.src"></v-img>

        <v-card-title>{{ n.name }}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="n.sterne"
              half-increments
              dense
              color="orange"
              background-color="orange"
              hover
              class="mr-2  mb-4 "
            ></v-rating>

            <span class="primary--text text-subtitle-2 mb-4 "
              >{{ n.sterne }} ({{ n.review }}) Google Bewertungen</span
            >
          </v-row>
          <v-spacer></v-spacer>

          <q class="my-4 text-subtitle-2 font-weight-medium grey--text ">
            {{ n.text }}
          </q>

          <!-- <q class=" text-subtitle-2 grey--text my-1 "> {{ n.text }}</q> -->
          <p class=" text-subtitle-2 grey--text my-1 ">
            {{ n.author }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn block color="orange lighten-1" elevation="10" :to="n.route">
            MEHR
          </v-btn>

          <v-spacer></v-spacer>
        </v-card-actions>
        <v-divider class="mx-4"></v-divider>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      overlay: false,

      KlinikDaten: [
        {
          name: 'Herzogin Elisabeth Hospital',
          text:
            'Kranke Menschen sind immer wahrhaft vornehmer als gesunde; denn nur der kranke Mensch ist ein Mensch. Seine Glieder haben eine Leidensgeschichte; sie sind durchgeistet.',
          author: 'Heinrich Heine',
          sterne: Math.round(4.25),
          review: 112,
          src: require('../assets/Hospitals/herzogin.png'),
          route: '/Herzogin',
        },
        {
          name: 'Klinik am Zuckerberg',
          text:
            'Das beste Mittel, um über die eigene Krankheit hinwegzukommen und sie innerlich zu überwinden, besteht darin, daß man sich anderer annimmt, die noch kränker sind.',
          author: 'Friedrich von Bodelschwingh',
          sterne: Math.round(4),
          review: 37,
          src: require('../assets/Hospitals/Zuckerberg.png'),
          route: '/Klinikzuckerberg',
        },
        {
          name: 'Klinikum Wolfsburg',
          text:
            'Der gesunde Mensch ist schön und sein Zustandekommen erstrebenswert. Aber es muß ein bißchen irgendwelcher Krankheit in ihn kommen, daß er auch geistig schön werde.',
          author: 'Christian Morgenstern ',
          sterne: Math.round(2.77),
          review: 164,
          src: require('../assets/Hospitals/klinikumwolfsburg.png'),
          route: '/Klinikumwolfsburg',
        },
        {
          name: 'Klinikum Peine',
          text:
            'Ein Glückspilz ist. wer irgendein physisches Gebrechen hat, das er für die schwachen Stellen seiner Seele verantwortlich machen kann.',
          author: 'Henry de Montherlant',
          sterne: Math.round(3),
          review: 104,
          src: require('../assets/Hospitals/Klinikum_Peine_2020.png'),
          route: '/Peine',
        },
        {
          name: 'St. Martini Krankenhaus',
          text:
            'Krankheit läßt den Wert der Gesundheit erkennen, das Böse den Wert des Guten, Hunger die Sättigung, Ermüdung den Wert der Ruhe.',
          author: 'Heraklit',
          sterne: Math.round(4.3),
          review: 32,
          src: require('../assets/Hospitals/Martini.png'),
          route: '/Martini',
        },
        {
          name: 'DIAKOVERE Henriettenstift',
          text:
            'Eine der größten Krankheitsursachen ist die Polypragmasia medicorum, die Neigung der Ärzte, viel zu verordnen.',
          author: 'August Bier',
          sterne: Math.round(2.98),
          review: 97,
          src: require('../assets/Hospitals/DKH_Aussenansicht-1.png'),
          route: '/Henristift',
        },
        {
          name: 'Eilenriede Klinik Hannover',
          text:
            'Vor der Entschuldigung "Ich habe nicht die Zeit, krank zu sein" hat jede Krankheit tiefe Achtung. Nur da macht sie Wohnung, wo sie mit aller Bequemlichkeit auf- und angenommen, wo sie gehegt und gepflegt wird.',
          author: 'Theodor Gottlieb von Hippel',
          sterne: Math.round(4.83),
          review: 30,
          src: require('../assets/Hospitals/eilenriedeklinik.png'),
          route: '/Ellenriede',
        },
        {
          name: 'Sophienklinik',
          text:
            'Krankheit ist nicht nur allein ein unangenehme und lästige Sache oder ein Versagen oder ein genetischer Defekt, sondern es birgt ein Spektrum einer großen Erfahrung, die man mittels Krankheit machen kann.',
          author: 'Christa Schyboll',
          sterne: Math.round(3.85),
          review: 100,
          src: require('../assets/Hospitals/Sophien.png'),
          route: '/Sophien',
        },
        {
          name: 'KRH Klinikum Agness Karll Laatzen',
          text:
            'Oft sehnt man eine Krankheit herbei, um Ruhe zu finden, und wenn sie endlich kommt, fürchtet man, zu rasch geheilt und einem unerträglichen Dasein zurückgegeben zu werden.',
          author: 'Heinrich Heine',
          sterne: Math.round(2.92),
          review: 108,
          src: require('../assets/Hospitals/Laatzen.png'),
          route: '/Laatzen',
        },
        {
          name: 'Klinikum Wahrendorff',
          text:
            'Krieg ist Verrat und Hass, der Wirrwarr unfähiger Generäle, Qual und Tod und Krankheit und Müdigkeit, bis endlich alles vorüber ist und nichts sich geändert hat, außer das neues Leid kommt und neuer Hass. ',
          author: 'John Steinbeck',
          sterne: Math.round(3.04),
          review: 21,
          src: require('../assets/Hospitals/Wahrendorff.png'),
          route: '/Wahrendorff',
        },
        {
          name: 'AMEOS Klinikum Hildesheim',
          text:
            'Es gibt nur eine Heilkraft, und das ist die Natur; in Salben und Pillen steckt keine. Höchstens können sie der Heilkraft der Natur einen Wink geben, wo etwas für sie zu tun ist.',
          author: 'Arthur Schopenhauer',
          sterne: 2.5,
          review: 65,
          src: require('../assets/Hospitals/k_helios-klinikum-hildesheim.png'),
          route: '/Hildesheim',
        },
        {
          name: 'Helios Kliniken Mittelweser',
          text:
            'Die schlimmste und verbreiteste Krankheit, die uns alle, unsere Literatur, unsere Erziehung, unser Verhalten zueinander durchseucht, ist die ungesunde Sorge um den Schein.',
          author: 'Walt Whitman',
          sterne: Math.round(2.39),
          review: 148,
          src: require('../assets/Hospitals/Helios-Kliniken-Mittelweser.png'),
          route: '/Mittelweser',
        },
        {
          name: 'HELIOS Klinik Cuxhaven',
          text:
            'In einer Flut von Anti-Mitteln (Anti-biotika, Anti-hypertonika, Anti- histaminika...), Hemmern und Blockern, wird die Schulmedizin das Wesen der Krankheitsbilder kaum erkennen lernen.',
          author: 'Rüdiger Dahlke',
          sterne: Math.round(2.92),
          review: 121,
          src: require('../assets/Hospitals/HELIOS Klinik Cuxhaven.png'),
          route: '/Cuxhaven',
        },
        {
          name: 'AMEOS Klinikum Seepark Geestland',
          text:
            'Krankheit ist nicht nur allein ein unangenehme und lästige Sache oder ein Versagen oder ein genetischer Defekt, sondern es birgt ein Spektrum einer großen Erfahrung, die man mittels Krankheit machen kann.',
          author: 'Christa Schyboll',
          sterne: Math.round(3.29),
          review: 47,
          src: require('../assets/Hospitals/Seepark.png'),
          route: '/Seepark',
        },
        {
          name: 'Krankenhaus Buchholz',
          text:
            'Das beste Mittel, um über die eigene Krankheit hinwegzukommen und sie innerlich zu überwinden, besteht darin, daß man sich anderer annimmt, die noch kränker sind.',
          author: 'Friedrich von Bodelschwingh',
          sterne: Math.round(2.79),
          review: 118,
          src: require('../assets/Hospitals/bucholz.png'),
          route: '/Bucholz',
        },
        {
          name: 'Krankenhaus Winsen',
          text:
            'Vor der Entschuldigung "Ich habe nicht die Zeit, krank zu sein" hat jede Krankheit tiefe Achtung. Nur da macht sie Wohnung, wo sie mit aller Bequemlichkeit auf- und angenommen, wo sie gehegt und gepflegt wird.',
          author: 'Theodor Gottlieb von Hippel',
          sterne: Math.round(3.08),
          review: 149,
          src: require('../assets/Hospitals/Winsen.png'),
          route: '/Winsen',
        },
        {
          name: 'Psychiatrische Klinik Lüneburg',
          text:
            'Kranke Menschen sind immer wahrhaft vornehmer als gesunde; denn nur der kranke Mensch ist ein Mensch. Seine Glieder haben eine Leidensgeschichte; sie sind durchgeistet.',
          author: 'Heinrich Heine',
          sterne: 2.5,
          review: 34,
          src: require('../assets/Hospitals/Luneburg.png'),
          route: '/Luneburg',
        },
      ],
    };
  },
};
</script>
<style scoped></style>
