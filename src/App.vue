<template>
  <v-app>
    <v-app-bar
      v-if="mobile"
      color="primary"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
      </template>
      <v-app-bar-title>
        <!-- <v-icon start>mdi-docker</v-icon> -->
        Docker e Redes
      </v-app-bar-title>
      <!-- <template v-slot:append>
        <v-btn>Teste</v-btn>
      </template> -->
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      theme="darkTheme"
      color="primary"
      :temporary="mobile"
    >
      <div v-if="!mobile">
        <div class="px-4 py-3 text-center">
          <p>Docker e Redes</p>
        </div>

        <v-divider />
      </div>

      <!-- <v-list nav>
        <v-list-subheader>INTRODUÇÂO</v-list-subheader>
        <v-list-item title="O que é Docker" prepend-icon="mdi-docker" to="/introducao" />
        <v-list-item title="Componentes" prepend-icon="mdi-power-plug" />

        <v-list-subheader>REDES</v-list-subheader>
        <v-list-item title="Drivers" prepend-icon="mdi-lan" />
        <v-list-item title="Bridge (Ponte)" prepend-icon="mdi-bridge" />
        <v-list-item title="Host" prepend-icon="mdi-home" />
        <v-list-item title="None (Nenhum)" prepend-icon="mdi-close-network" />
        <v-list-item title="Overlay" prepend-icon="mdi-router-network" />

        <v-list-subheader>OUTROS</v-list-subheader>
        <v-list-item title="Conclusão" prepend-icon="mdi-thought-bubble" />
        <v-list-item title="FAQ" prepend-icon="mdi-help-circle" />
        <v-list-item title="Bibliografia" prepend-icon="mdi-library" />
      </v-list> -->

      <v-list
        :items="navItems"
        nav
        theme="dark"
      />
    </v-navigation-drawer>

    <v-main>
      <v-container class="pa-7 bg-grey-lighten-3 fill-height">
        <router-view />
      </v-container>
      <BottomNavigation />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { useDisplay } from 'vuetify';
import BottomNavigation from './components/BottomNavigation.vue';

const { mobile } = useDisplay();

const drawer = ref(!mobile.value);

const navItems = [
  { title: 'INTRODUÇÂO', type: 'subheader' },
  { title: 'Sobre Docker', props: { prependIcon: 'mdi-docker', to: '/sobre-docker' } },
  { title: 'Componentes', props: { prependIcon: 'mdi-power-plug', to: '/componentes' } },
  { title: 'REDES', type: 'subheader' },
  { title: 'Drivers', props: { prependIcon: 'mdi-lan', to: '/drivers' } },
  { title: 'Bridge (Ponte)', props: { prependIcon: 'mdi-bridge', to: '/bridge' } },
  { title: 'Host', props: { prependIcon: 'mdi-network', to: '/host' } },
  { title: 'None (Nenhum)', props: { prependIcon: 'mdi-close-network', to: '/none' } },
  { title: 'Overlay', props: { prependIcon: 'mdi-router-network', to: '/overlay' } },
  { title: 'OUTROS', type: 'subheader' },
  { title: 'Conclusão & FAQ', props: { prependIcon: 'mdi-help-circle', to: '/conclusao' } },
  { title: 'Referências', props: { prependIcon: 'mdi-library', to: '/referencias' } },
];

</script>

<style>
html {
  overflow-y: auto;
}

.card-paragraph {
  line-height: 2;
  text-align: justify;
}
</style>
