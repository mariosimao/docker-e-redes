<template>
  <v-row class="mb-5">
    <v-col cols="12" md="4">
      <v-card prepend-icon="mdi-docker" title="O que é Docker?">
        <template v-slot:prepend>
          <v-icon size="x-large" color="primary" />
        </template>
        <v-card-text>
          <div class="text-h4">
          </div>
          <div class="card-paragraph">
            Docker é uma plataforma open-source para desenvolvimento de aplicações, utilizando da tecnologia
            de containers para facilitar o manuseio da infraestrutura. Os containers são ambientes isolados
            virtualizados que contém tudo que uma determinada aplicação precisa para ser executada, sem
            depender do hospedeiro.
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card prepend-icon="mdi-thumb-up" title="Quando usar?">
        <template v-slot:prepend>
          <v-icon size="x-large" color="green" />
        </template>
        <v-card-text>
          <div class="card-paragraph">
            Além de ser consideravelmente leve, a plataforma do Docker permite o compartilhamento do kernel
            da máquina hospedeira com a máquina virtualizada, minimizando a perda de desempenho da aplicação
            virtualizada.
          </div>
          <div class="card-paragraph mt-3">
            Facilita também o compartilhamento do ambiente: Um container pode ser compartilhado e funcionará
            exatamente igual ao original, sem depender de variações de hardware e software instaladas na
            máquina hospedeira.
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card prepend-icon="mdi-thumb-down" title="Desvantagens">
        <template v-slot:prepend>
          <v-icon size="x-large" color="red" />
        </template>
        <v-card-text>
          <div class="card-paragraph">
            Uma desvantagem do uso do Docker, é que diferente de uma máquina virtual, que aloca seus recursos
            para aquela virtualização ao ser iniciada, para atingir resultados mais ágeis, o Docker compartilha
            recursos entre todos os containers que estão sendo executados (além das aplicações do sistema
            operacional hospedeiro). Isso pode levar a certas aplicações mais dependentes de certos recursos,
            como memória ou processamento, a serem prejudicados.
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-img :src="image" max-height="450px" />
      <div class="text-caption text-center">Figura 1: Docker</div>
    </v-col>
  </v-row>
</template>

<script setup>
import image from '@/assets/sobre-docker.svg'
</script>
