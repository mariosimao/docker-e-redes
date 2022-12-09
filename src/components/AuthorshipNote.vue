<template>
  <v-footer v-if="(!mobile && route.path == '/')" :app="true">
    <div class="text-justify text-caption">
      {{ text }}
    </div>
  </v-footer>
  <v-footer v-if="(mobile && route.path == '/')">
    <div class="text-justify text-caption">
      {{ text }}
    </div>
  </v-footer>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();
const route = useRoute();

const text = "Este trabalho foi totalmente produzido pelos autores que declaram não terem violado os direitos autorais de terceiros, sejam eles pessoas físicas ou jurídicas. Havendo textos, tabelas e figuras transcritos de obras de terceiros com direitos autorais protegidos ou de domínio público tal como idéias e conceitos de terceiros, mesmo que sejam encontrados na Internet, os mesmos estão com os devidos créditos aos autores originais e estão incluídas apenas com o intuito de deixar o trabalho autocontido. O(s) autor(es) tem(êm) ciência dos Artigos 297 a 299 do Código Penal Brasileiro e também que o uso do artifício de copiar/colar texto de outras fontes e outras formas de plágio é um ato ilícito, condenável e passível de punição severa. No contexto da Universidade a punição não precisa se restringir à reprovação na disciplina e pode gerar um processo disciplinar que pode levar o(s) aluno(s) à suspensão.";
</script>