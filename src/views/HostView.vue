<template>
  <v-row justify="center" class="mb-5">
    <v-col md="4">
      <v-card prepend-icon="mdi-network" title="Host">
        <template v-slot:prepend>
          <v-icon size="x-large" color="primary" />
        </template>
        <v-card-text>
          <div class="card-paragraph">
            Outro driver comumente utilizado é o do tipo host. Nesta configuração, a isolação entre host e containers é removida. Assim, se um container é executado expondo uma porta, esta mesma porta é acessível externamente no host. A Figura 6 exemplifica esse cenário, onde o container tem sua porta 5000 acessível pelo host.          </div>
          <div class="card-paragraph mt-3">
            Uma desvantagem do uso deste tipo de driver de rede é não ser possível utilizar múltiplos containers expondo a mesma porta. Seguindo o exemplo anterior, não seria possível ter dois containers inicializados expondo a porta 5000 com o driver de rede host.          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col>
      <v-img :src="image" max-height="450px" />
      <div class="text-caption text-center">Figura 6: Configuração do driver de rede do tipo host.</div>
    </v-col>
  </v-row>
</template>

<script setup>
import image from '@/assets/host.png'
</script>
