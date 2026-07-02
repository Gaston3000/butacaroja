<script setup>
import { ref } from 'vue'

defineProps(['pelicula'])

const mostrarInfo = ref(false)

// TMDB devuelve solo la ruta del poster, hay que armar la URL completa
const urlImagen = 'https://image.tmdb.org/t/p/w500'
</script>

<template>
  <v-card class="mx-auto" height="100%">
    <v-img height="330px" :src="urlImagen + pelicula.poster_path" cover>
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular color="primary" indeterminate></v-progress-circular>
        </div>
      </template>
    </v-img>

    <v-card-title>{{ pelicula.title }}</v-card-title>

    <v-card-subtitle class="d-flex align-center ga-1">
      <v-icon icon="mdi-star" color="secondary" size="small" />
      {{ pelicula.vote_average?.toFixed(1) }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="primary" :to="'/detalle/' + pelicula.id">Ver detalle</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :icon="mostrarInfo ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="mostrarInfo = !mostrarInfo"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="mostrarInfo">
        <v-divider></v-divider>
        <v-card-text>{{ pelicula.overview || 'Sin descripción disponible.' }}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
