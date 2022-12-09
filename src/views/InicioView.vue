<template>
  <div class="d-flex flex-column justify-space-around align-center fill-height align-content-center">
    <div class="text-center text-h1">
      <div class="pb-5">🐳 + 🌐</div>
      <div :class="mobile ? 'text-h3' : ''">Docker e Redes</div>
    </div>
    <div :class="['text-center', 'text-subtitle-2', mobile ? 'w-100' : 'w-50']">
      Este trabalho é dividido em duas partes. A primeira faz uma introdução à tecnologia Docker, apresentando seus
      principais componentes, vantagens e desvantagens. A segunda metade aprofunda nas diferentes configurações de rede
      oferecidas pelo Docker, seus propósitos, funcionalidades, casos de uso e quando não usá-las.
    </div>
    <div>
      <v-btn
        to="/sobre-docker"
        color="primary"
        prepend-icon="mdi-play"
      >
        Começar
      </v-btn>
    </div>
    <div class="text-center">
      <div>Gabriel Romão &middot; gabriel_romao at poli.ufrj.br</div>
      <div>Mario Simão &middot; mariosimao at poli.ufrj.br</div>
    </div>
    <div class="text-center">
      <div>2022.2</div>
      <div>Redes de Computadores II &middot; EEL-879</div>
    </div>
    <div class="text-center">
      <div>Engenharia Eletrônica e de Computação</div>
      <div>Departamento de Engenharia Eletrônica e de Computação</div>
      <div>Universidade Federal do Rio de Janeiro</div>
    </div>
  </div>
</template>

<script setup>
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay()
</script>