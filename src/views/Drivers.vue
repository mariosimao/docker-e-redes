<template>
  <v-row class="mb-5" justify="center">
    <v-col cols="4">
      <v-card prepend-icon="mdi-lan" title="Drivers de Rede">
        <template v-slot:prepend>
          <v-icon size="x-large" color="primary" />
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
  </v-row>
  <v-row align-content="center" align="center" justify="center">
    <v-col cols="12" class="d-flex justify-center align-center">
      <v-btn
        to="/bridge"
        prepend-icon="mdi-bridge"
        color="primary"
        size="x-large"
      >
        Bridge
      </v-btn>
    </v-col>
    <v-col cols="12" class="d-flex justify-center align-center">
      <v-btn
        to="/host"
        prepend-icon="mdi-network"
        color="primary"
        size="x-large"
      >
        Host
      </v-btn>
    </v-col>
    <v-col cols="12" class="d-flex justify-center align-center">
      <v-btn
        to="/none"
        prepend-icon="mdi-close-network"
        color="primary"
        size="x-large"
      >
        None
      </v-btn>
    </v-col>
    <v-col cols="12" class="d-flex justify-center align-center">
      <v-btn
        to="/overlay"
        prepend-icon="mdi-router-network"
        color="primary"
        size="x-large"
      >
        Overlay
      </v-btn>
    </v-col>
  </v-row>
</template>
