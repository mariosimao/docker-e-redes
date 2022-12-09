import { createRouter, createWebHashHistory } from 'vue-router';

import Inicio from '../views/Inicio.vue';
import SobreDocker from '../views/SobreDocker.vue';
import Componentes from '../views/Componentes.vue';
import Drivers from '../views/Drivers.vue';
import Bridge from '../views/Bridge.vue';
import Host from '../views/Host.vue';
import None from '../views/None.vue';
import Overlay from '../views/Overlay.vue';
import Conclusao from '../views/Conclusao.vue';
import Referencias from '../views/Referencias.vue';

const routes = [
  { path: '/',             name: 'inicio',      component: Inicio      },
  { path: '/sobre-docker', name: 'sobreDocker', component: SobreDocker },
  { path: '/componentes',  name: 'componentes', component: Componentes },
  { path: '/drivers',      name: 'drivers',     component: Drivers     },
  { path: '/bridge',       name: 'bridge',      component: Bridge      },
  { path: '/host',         name: 'host',        component: Host        },
  { path: '/none',         name: 'none',        component: None        },
  { path: '/overlay',      name: 'overlay',     component: Overlay     },
  { path: '/conclusao',    name: 'conclusao',   component: Conclusao   },
  { path: '/referencias',  name: 'referencias', component: Referencias },
];

export default createRouter({
	history: createWebHashHistory('/docker-e-redes/'),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
	routes,
});
