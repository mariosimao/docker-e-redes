<template>
  <div class="d-flex flex-column justify-space-around align-center fill-height align-content-center">
    <div class="text-center text-h1">
      <div>🐳 + 🌐</div>
      <div class="py-5">Docker e Redes</div>
    </div>
    <div :class="['text-center', 'text-subtitle-2', mobile ? 'w-100' : 'w-50']">
      Este trabalho é dividido em duas partes. A primeira faz uma introdução à tecnologia Docker, apresentando seus
      principais componentes, vantagens e desvantagens. A segunda metade aprofunda nas diferentes configurações de rede
      oferecidas pelo Docker, seus propósitos, funcionalidades, casos de uso e quando não usá-las.
    </div>
    <div class="text-center">
      <div>Gabriel Romão [ gabriel_romao at poli dot ufrj dot br ]</div>
      <div>Mario Simão [ mariosimao at poli dot ufrj dot br ]</div>
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

  <v-footer :app="true">
    <div class="text-center text-caption">
      Este trabalho foi totalmente produzido pelos autores que declaram não terem violado os direitos autorais de
      terceiros, sejam eles pessoas físicas ou jurídicas. Havendo textos, tabelas e figuras transcritos de obras de
      terceiros com direitos autorais protegidos ou de domínio público tal como idéias e conceitos de terceiros, mesmo que
      sejam encontrados na Internet, os mesmos estão com os devidos créditos aos autores originais e estão incluídas
      apenas com o intuito de deixar o trabalho autocontido. O(s) autor(es) tem(êm) ciência dos Artigos 297 a 299 do
      Código Penal Brasileiro e também que o uso do artifício de copiar/colar texto de outras fontes e outras formas de
      plágio é um ato ilícito, condenável e passível de punição severa. No contexto da Universidade a punição não precisa
      se restringir à reprovação na disciplina e pode gerar um processo disciplinar que pode levar o(s) aluno(s) à
      suspensão.
    </div>
  </v-footer>
</template>

<script setup>
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay()
</script>