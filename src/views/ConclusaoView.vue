<template>
  <v-row justify="center" class="mb-5">
    <v-col md="5">
      <v-card prepend-icon="mdi-thought-bubble" title="Conclusão">
        <template v-slot:prepend>
          <v-icon size="x-large" color="primary" />
        </template>
        <v-card-text>
          <div class="card-paragraph">
            A pesquisa por como Docker se comunica com a rede externa e como containers se comunicam trouxe múltiplas
            respostas. Existem diversas configurações possíveis, onde cada driver possui seus prós e contras, sem
            existir uma “bala de prata”.
          </div>
          <div class="card-paragraph mt-3">
            Com isso em mente, pode-se também perceber que o uso do driver em ponte (bridge) seja o mais comum, pela sua
            simplicidade de uso e por ser capaz de lidar com uma ampla variações de aplicações que fazem uso de Docker e
            precisam se comunicar entre si.
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col md="5">
      <v-card prepend-icon="mdi-help-circle" title="FAQ">
        <template v-slot:prepend>
          <v-icon size="x-large" color="primary" />
        </template>
        <v-card-text>
          <v-expansion-panels color="primary">
            <v-expansion-panel
              title="Qual a diferença entre imagem e container no contexto do Docker?"
              text="As imagens são um conjunto de instruções para a criação dos containers, que por sua vez, são versões executáveis das imagens."
            />
            <v-expansion-panel
              title="Quais as vantagens do uso de Dockers?"
              text="Leveza, maior integração entre o kernel do hospedeiro e a máquina virtualizada, e facilidade de compartilhamento, visto que um container pode ser compartilhado e funcionará independente de hardware ou software instalados na nova máquina."
            />
            <v-expansion-panel
              title="Como o driver Bridge permite a conexão de containers com a rede?"
              text="Uma rede privada é iniciada junto do servidor Docker, em que todos os containers se conectam, podendo então se conectar entre si através da mesma. Para redes externas, o servidor Docker mapeia as portas internas dos containers com as portas do hospedeiro."
            />
            <v-expansion-panel
              title="Explique quando usar os drivers Bridge, Host, None e Overlay."
            >
              <v-expansion-panel-text>
                <p class="pb-1">Bridge: Usado para conexões entre containers com possibilidade de acessar redes externas através de mapeamento de portas</p>
                <p class="pb-1">Host: Usado para conexão entre a máquina hospedeira e containers, com a desvantagem que dois containers não podem abrir o mesmo número de porta.</p>
                <p class="pb-1">None: Usado para impedir que um container se comunique com outros containers ou com redes externas.</p>
                <p>Overlay: Usado para comunicação entre containers em servidores Docker diferentes."</p>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel
              title="Quais as desvantagens do uso de Dockers?"
              text="A alocação de recursos não é feita por container, invés disso o Docker compartilha os recursos disponíveis entre todos os containers, podendo levar a aplicações que utilizam intensivamente desses recursos a serem prejudicadas."
            />
          </v-expansion-panels>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
