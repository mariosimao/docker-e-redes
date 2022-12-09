<template>
  <v-row justify="center" class="mb-10">
    <v-col cols="12" md="4">
      <v-card prepend-icon="mdi-bridge" title="Bridge (Ponte)">
        <template v-slot:prepend>
          <v-icon size="x-large" color="primary" />
        </template>
        <v-card-text>
          <div class="text-h4">
          </div>
          <div class="card-paragraph">
            Este é o driver padrão. Ao iniciar o servidor Docker, uma rede privada no host é criada e todos os containers, ao serem iniciados, conectam-se nesta rede padrão. Assim, pode ser usada para containers isolados se conectarem entre si.
          </div>
          <div class="card-paragraph mt-3">
            A ponte criada pelo daemon, normalmente denominada docker0, envia pacotes para as diferentes interfaces de rede. Cada container conectado nesta rede possui um endereço IP na faixa 172.17.x.x, como ilustrado na Figura 4.
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-img :src="image1" max-height="450px" />
      <div class="text-caption text-center">Figura 4: Configuração de containers conectados em ponte.</div>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col cols="12" md="4">
      <v-img :src="image2" max-height="450px" />
      <div class="text-caption text-center">Figura 5: Mapeamento de portas de containers para portas do host.</div>
    </v-col>
    <v-col cols="12" md="4">
      <v-card>
        <v-card-text>
          <div class="card-paragraph">
            Para acesso externo aos containers, é necessário mapear as portas dos containers com as portas do host. A Figura 5 ilustra como os containers “mysql”, “apache” e “ssh” internamente se comuniquem através das portas 3306, 80 e 22. No entanto, o servidor Docker mapeia estas portas para novas portas no host, assim que acessa externamente, utiliza as portas 24689, 25890 e 3222 respectivamente.
          </div>
          <div class="card-paragraph mt-3">
            Uma vantagem desse tipo de conexão é o fato de permitir que diferentes containers usem a mesma porta internamente, uma vez que serão mapeadas para outras portas do host. Seguindo o exemplo da Figura 5, se existissem dois containers executando uma aplicação “apache”, não haveria conflitos na porta 80, já que essa porta seria mapeada para um número diferente de porta no host em cada caso.          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import image1 from '@/assets/bridge.webp'
import image2 from '@/assets/bridge2.png'
</script>
