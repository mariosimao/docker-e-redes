<template>
  <v-row class="mb-5" justify="center">
    <v-col cols="4">
      <v-card prepend-icon="mdi-lan" title="Drivers de Rede">
        <template v-slot:prepend>
          <v-icon size="x-large"
          class="mx-3" color="primary" />
        </template>
        <v-card-text>
          <div class="text-h4">
          </div>
          <div class="card-paragraph">
            Docker oferece diferentes tipos de conexão para os containers através dos chamados
            drivers de rede. A seguir, serão apresentados diferentes tipos de drivers, cada um com
            seus respectivos propósitos, formas de utilização, vantagens e desvantagens.
          </div>
          <div class="card-paragraph mt-3">
            Vale ressaltar que o servidor Docker pode executar múltiplos containers, cada um se
            conectando a várias redes com um driver específico. Um container só se comunica através
            de redes em que está conectado.
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" align="center">
      <v-btn
        to="/bridge"
        prepend-icon="mdi-bridge"
        color="primary"
        size="x-large"
        class="mx-3"
      >
        Bridge
      </v-btn>
      <v-btn
        to="/host"
        prepend-icon="mdi-network"
        color="primary"
        size="x-large"
        class="mx-3"
      >
        Host
      </v-btn>
      <v-btn
        to="/none"
        prepend-icon="mdi-close-network"
        color="primary"
        size="x-large"
        class="mx-3"
      >
        None
      </v-btn>
      <v-btn
        to="/overlay"
        prepend-icon="mdi-router-network"
        color="primary"
        size="x-large"
        class="mx-3"
      >
        Overlay
      </v-btn>
    </v-col>
  </v-row>
  <v-row align-content="center" align="center" justify="center">
    <v-col cols="5">
      <v-img :src="image" />
      <div class="text-caption text-center">Figura 3: Drivers de Rede</div>
    </v-col>
  </v-row>
</template>

<script setup>
import image from '@/assets/drivers.webp'
</script>