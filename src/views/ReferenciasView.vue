<template>
  <v-row justify="center" class="mb-5">
    <v-col md="6">
      <v-card prepend-icon="mdi-library" title="Referências">
        <template v-slot:prepend>
          <v-icon size="x-large" color="primary" />
        </template>
        <v-card-text>
          <v-table density="comfortable">
            <thead>
              <tr>
                <th class="text-left">Título</th>
                <th class="text-left">Autor</th>
                <th class="text-left">Último acesso</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in refs" :key="item.title">
                <td>
                  <a :href="item.url">{{ item.title }}</a>
                </td>
                <td>{{ item.author }}</td>
                <td>{{ item.lastAccess }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const refs = [
  {
    author: 'Choudhary, Ashish.',
    title: 'Understanding Docker Networking',
    lastAccess: '13/11/2022',
    url: 'https://earthly.dev/blog/docker-networking',
  },
  {
    author: 'Docker Documentation.',
    title: 'Networking overview',
    lastAccess: '13/11/2022',
    url: 'https://docs.docker.com/network',
  },
  {
    author: 'Afreen, Sana.',
    title: 'Introduction To Docker Networking: Advantages and Working',
    lastAccess: '13/11/2022',
    url: 'https://www.simplilearn.com/tutorials/docker-tutorial/docker-networking',
  },
  {
    author: 'Docker Documentation.',
    title: 'Network containers',
    lastAccess: '13/11/2022',
    url: 'https://docs.docker.com/engine/tutorials/networkingcontainers/',
  },
  {
    author: 'Docker Documentation.',
    title: 'Docker overview',
    lastAccess: '13/11/2022',
    url: 'https://docs.docker.com/get-started/overview',
  },
  {
    author: 'Bigelow, Stephen.',
    title: 'What is Docker and how does it work?',
    lastAccess: '13/11/2022',
    url: 'https://www.techtarget.com/searchitoperations/definition/Docker',
  },
  {
    author: 'Wilson, Bibin.',
    title: 'What is Docker? How Does it Work?',
    lastAccess: '13/11/2022',
    url: 'https://devopscube.com/what-is-docker/',
  },
  {
    author: 'Srivastava, Alankrit.',
    title: 'Understanding Communication Between Docker Containers',
    lastAccess: '13/11/2022',
    url: 'https://cloudkul.com/blog/understanding-communication-docker-containers',
  },
  {
    author: 'Gyanchandani, Sumeet.',
    title: 'Docker Networking',
    lastAccess: '13/11/2022',
    url: 'https://towardsdatascience.com/docker-networking-919461b7f498',
  },
  {
    author: 'Church, Mark.',
    title: 'Understanding Docker Networking Drivers and their use cases',
    lastAccess: '13/11/2022',
    url: 'https://www.docker.com/blog/understanding-docker-networking-drivers-use-cases/',
  },
];
</script>
