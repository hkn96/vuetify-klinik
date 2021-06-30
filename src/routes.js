import Klinikzuckerberg from './Hospitals/Klinikzuckerberg.vue';
import Klinikumwolfsburg from './Hospitals/Klinikumwolfsburg.vue';
import Peine from './Hospitals/Peine.vue';
import Hildesheim from './Hospitals/Hildesheim.vue';
import Seepark from './Hospitals/Seepark.vue';
import Henristift from './Hospitals/Henristift.vue';
import Ellenriede from './Hospitals/Ellenriede.vue';
import Cuxhaven from './Hospitals/Cuxhaven.vue';
import Mittelweser from './Hospitals/Mittelweser.vue';
import Wahrendorff from './Hospitals/Wahrendorff.vue';
import Bucholz from './Hospitals/Bucholz.vue';
import Winsen from './Hospitals/Winsen.vue';
import Laatzen from './Hospitals/Laatzen.vue';
import Luneburg from './Hospitals/Luneburg.vue';
import Sophien from './Hospitals/Sophien.vue';
import Martini from './Hospitals/Martini.vue';
import Herzogin from './Hospitals/Herzogin.vue';

import Carousel from './components/Carousel.vue';
import Uberuns from './components/Uberuns.vue';
import Cards from './components/Cards.vue';
import Kontakt from './components/Kontakt.vue';

export const routes = [
  {
    path: '/',
    components: {
      default: Carousel,
      Cards: Cards,
    },
  },
  { path: '/Carousel', component: Carousel },
  { path: '/Kontakt', component: Kontakt },
  { path: '/Cards', component: Cards },
  { path: '/Bucholz', component: Bucholz },
  { path: '/Cuxhaven', component: Cuxhaven },
  { path: '/Ellenriede', component: Ellenriede },
  { path: '/Henristift', component: Henristift },
  { path: '/Herzogin', component: Herzogin },
  { path: '/Hildesheim', component: Hildesheim },
  { path: '/Klinikumwolfsburg', component: Klinikumwolfsburg },
  { path: '/Klinikzuckerberg', component: Klinikzuckerberg },
  { path: '/Laatzen', component: Laatzen },
  { path: '/Luneburg', component: Luneburg },
  { path: '/Martini', component: Martini },
  { path: '/Mittelweser', component: Mittelweser },
  { path: '/Peine', component: Peine },
  { path: '/Seepark', component: Seepark },
  { path: '/Sophien', component: Sophien },
  { path: '/Wahrendorff', component: Wahrendorff },
  { path: '/Winsen', component: Winsen },
  { path: '/Uberuns', component: Uberuns },
];
