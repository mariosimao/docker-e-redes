import { createRouter, createWebHashHistory } from 'vue-router';

import Inicio from '../views/InicioView.vue';
import SobreDocker from '../views/SobreDockerView.vue';
import Componentes from '../views/ComponentesView.vue';
import Drivers from '../views/DriversView.vue';
import Bridge from '../views/BridgeView.vue';
import Host from '../views/HostView.vue';
import None from '../views/NoneView.vue';
import Overlay from '../views/OverlayView.vue';
import Conclusao from '../views/ConclusaoView.vue';
import Referencias from '../views/ReferenciasView.vue';

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
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
	routes,
});
