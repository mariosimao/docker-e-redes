<template>
  <v-bottom-navigation
    v-if="previousTo != null || nextTo != null"
    grow
  >
    <v-btn
      :to="previousTo ?? '/'"
      :disabled="previousTo == null"
    >
      <v-icon>mdi-arrow-left</v-icon>
      Anterior
    </v-btn>

    <v-btn to="/">
      <v-icon>mdi-home</v-icon>
      Início
    </v-btn>

    <v-btn
      :to="nextTo ?? '/'"
      :disabled="nextTo == null"
    >
      <v-icon>mdi-arrow-right</v-icon>
      Próximo
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useRoute, useRouter } from 'vue-router';

const routes = useRouter().getRoutes();
const routeIndex = computed(() => routes.findIndex(r => r.path == useRoute().path));

const previousTo = computed(() => {
  if (routeIndex.value <= 1 ) {
    return null;
  }

  return routes[routeIndex.value - 1].path;
});

const lastIndex = routes.length - 1;
const nextTo = computed(() => {
  if (routeIndex.value <= 0) {
    return null;
  }

  if (routeIndex.value >= lastIndex) {
    return null;
  }

  return routes[routeIndex.value + 1].path;
});

</script>