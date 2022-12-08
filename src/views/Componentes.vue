<template>
  <v-row class="mb-5" justify="center">
    <v-col cols="4">
      <v-card prepend-icon="mdi-power-plug" title="Componentes">
        <template v-slot:prepend>
          <v-icon size="x-large" color="primary" />
        </template>
        <v-card-text>
          <div class="text-h4">
          </div>
          <div class="card-paragraph">
            A base do funcionamento do Docker é o cliente Docker, o daemon Docker, imagens,
            containers e o registro. O cliente e o daemon podem ou não estarem instalados na mesma
            máquina, ou o cliente pode acessar um daemon remotamente. A partir dos comandos
            requisitados pelo cliente, o daemon utiliza de imagens provindas do registro (que pode
            ser público, como o Docker Hub, ou particular), para a criação de containers.
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col cols="4">
      <v-card prepend-icon="mdi-server" title="Servidor Docker">
        <template v-slot:prepend>
          <v-icon size="x-large" color="primary" />
        </template>
        <v-card-text>
          <div class="card-paragraph">
            É onde ficam armazenadas as imagens, containers, e o Docker daemon, este último sendo
            responsável pela comunicação do cliente com o restante do servidor, através de uma
            API REST. O Docker daemon também consegue se comunicar com daemons de outros servidores,
            caso seja necessário.
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card prepend-icon="mdi-image" title="Imagens">
        <template v-slot:prepend>
          <v-icon size="x-large" color="primary" />
        </template>
        <v-card-text>
          <div class="card-paragraph">
            São conjuntos de instruções para a criação de um container. Em geral, a customização de
            imagens é uma parte grande do funcionamento do Docker, onde por exemplo, uma imagem de
            um sistema operacional é modificada para também incluir a instalação de um certo software
            necessário para que a aplicação sendo desenvolvida funcione.
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col cols="4">
      <v-card prepend-icon="mdi-cube" title="Containers">
        <template v-slot:prepend>
          <v-icon size="x-large" color="primary" />
        </template>
        <v-card-text>
          <div class="card-paragraph">
            É uma instância executável de uma imagem, que pode ser manipulada pelo cliente e pelo
            daemon. O container é isolado de outros containers e da máquina hospedeira, porém isso
            pode ser configurado para controlar o grau de isolamento.
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card prepend-icon="mdi-cloud" title="Registro">
        <template v-slot:prepend>
          <v-icon size="x-large" color="primary" />
        </template>
        <v-card-text>
          <div class="card-paragraph">
            É como um repositório da onde o servidor procura imagens para serem usadas no projeto
            atual. O Docker Hub é o repositório padrão configurado na instalação, mas existe a
            possibilidade de criar e conectar a repositórios particulares.
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
