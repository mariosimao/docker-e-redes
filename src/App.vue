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
        <RouterLink to="/" class="text-decoration-none text-white">Docker e Redes</RouterLink>
      </v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :absolute="!mobile"
      :theme="mobile ? 'default' :'darkTheme'"
      :color="mobile ? 'light' : 'primary'"
      :temporary="mobile"
    >
      <div v-if="!mobile">
        <div class="px-4 py-3 text-center">
          <RouterLink to="/" class="text-decoration-none text-white">Docker e Redes</RouterLink>
        </div>
        <v-divider />
      </div>
      <v-list
        :items="navItems"
        nav
      />
    </v-navigation-drawer>

    <v-main>
      <v-container :class="['bg-grey-lighten-3', 'fill-height', mobile ? 'px-3 py-7' : 'pa-7']">
        <router-view />
      </v-container>
      <AuthorshipNote />
      <BottomNavigation />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { useDisplay } from 'vuetify';
import BottomNavigation from './components/BottomNavigation.vue';
import AuthorshipNote from './components/AuthorshipNote.vue';

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
