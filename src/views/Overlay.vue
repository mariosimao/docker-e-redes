<template>
  <v-row justify="center" class="mb-5">
    <v-col md="5">
      <v-card prepend-icon="mdi-router-network" title="Overlay">
        <template v-slot:prepend>
          <v-icon size="x-large" color="primary" />
        </template>
        <v-card-text>
          <div class="card-paragraph">
            Para containers sendo executados em diferentes hosts, utliza-se normalmente o driver de rede do tipo “overlay”. Este tipo de driver é responsável por criar uma rede distribuída entre múltiplos servidores Docker.
          </div>
          <div class="card-paragraph mt-3">
            A rede é criada em cima de redes do host, por isso o nome overlay, permitindo que containers conectados a ela se comuniquem. Caso as redes possuam criptografia configurada, essa comunicação é feita de forma segura.
          </div>
          <div class="card-paragraph mt-3">
            A Figura 8 mostra um exemplo de dois containers “db” e “web” hospedados em diferentes hosts. A conexão através da rede overlay permite uma configuração escalável, sendo possível aumentar os recursos computacionais do “hostB” ou fazer balanceamento de carga caso haja muito trafego no container “web”.          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col md="5">
      <v-img :src="image" max-height="450px" />
      <div class="text-caption text-center">Figura 8: Conexão entre hosts com driver de rede do tipo overlay.</div>
    </v-col>
  </v-row>
</template>

<script setup>
import image from '@/assets/overlay.png'
</script>
