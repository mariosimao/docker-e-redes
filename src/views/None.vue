<template>
  <v-row justify="center" class="mb-5">
    <v-col md="4">
      <v-card prepend-icon="mdi-close-network" title="None">
        <template v-slot:prepend>
          <v-icon size="x-large" color="primary" />
        </template>
        <v-card-text>
          <div class="card-paragraph">
            A fim de isolar um container, existe o driver de rede chamado none. Com ele, um container inicializado não consegue se comunicar com nenhum outro container ou rede. Um caso de uso para este tipo de driver é quando se tem requisitos fundamentais de segurança.
          </div>
          <div class="card-paragraph mt-3">
            Note que ao usar nenhum driver, containers não tem a interface ethernet “eth0” disponível.
          </div>
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
import image from '@/assets/none.png'
</script>
