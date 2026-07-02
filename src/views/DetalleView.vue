<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { peliculasDemo } from '@/demo/datosDemo.js'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const urlImagen = 'https://image.tmdb.org/t/p/w500'
const MODO_DEMO = !API_KEY || API_KEY === 'tu_api_key_aca'

const route = useRoute()
const pelicula = ref(null)
const cargando = ref(true)
const enFavoritos = ref(false)

onMounted(async () => {
  // En modo demo busco la pelicula en los datos de ejemplo
  if (MODO_DEMO) {
    pelicula.value = peliculasDemo.find((p) => p.id == route.params.id)
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
    enFavoritos.value = favoritos.some((p) => p.id == pelicula.value?.id)
    cargando.value = false
    return
  }
  try {
    const res = await fetch(BASE_URL + '/movie/' + route.params.id + '?language=es-MX&api_key=' + API_KEY)
    const data = await res.json()
    pelicula.value = data
    // Reviso si esta pelicula ya estaba guardada en favoritos
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
    enFavoritos.value = favoritos.some((p) => p.id == pelicula.value.id)
  } catch (error) {
    console.error(error)
  } finally {
    cargando.value = false
  }
})

// Agregar o quitar de favoritos (mismo patron de localStorage que vimos en clase)
const toggleFavorito = () => {
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
  if (enFavoritos.value) {
    localStorage.setItem('favoritos', JSON.stringify(favoritos.filter((p) => p.id != pelicula.value.id)))
    enFavoritos.value = false
  } else {
    favoritos.push(pelicula.value)
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
    enFavoritos.value = true
  }
}
</script>

<template>
  <v-container>
    <v-row v-if="!cargando && pelicula">
      <v-col cols="12" md="4">
        <v-img :src="urlImagen + pelicula.poster_path" cover class="rounded-lg"></v-img>
      </v-col>
      <v-col cols="12" md="8">
        <h1>{{ pelicula.title }}</h1>
        <p v-if="pelicula.tagline" class="text-grey mb-3">{{ pelicula.tagline }}</p>

        <div class="d-flex ga-2 mb-4 flex-wrap">
          <v-chip prepend-icon="mdi-star" color="secondary">{{ pelicula.vote_average?.toFixed(1) }}</v-chip>
          <v-chip prepend-icon="mdi-calendar">{{ pelicula.release_date?.slice(0, 4) }}</v-chip>
          <v-chip v-for="g in pelicula.genres" :key="g.id">{{ g.name }}</v-chip>
        </div>

        <h3 class="mb-1">Sinopsis</h3>
        <p class="mb-5">{{ pelicula.overview || 'Sin descripción disponible.' }}</p>

        <v-btn
          :color="enFavoritos ? 'primary' : 'grey-darken-3'"
          :prepend-icon="enFavoritos ? 'mdi-heart' : 'mdi-heart-outline'"
          @click="toggleFavorito"
        >
          {{ enFavoritos ? 'Quitar de favoritos' : 'Agregar a favoritos' }}
        </v-btn>
      </v-col>
    </v-row>

    <!-- Esqueleto mientras carga -->
    <v-row v-else>
      <v-col cols="12" md="4">
        <v-skeleton-loader type="image" height="400"></v-skeleton-loader>
      </v-col>
      <v-col cols="12" md="8">
        <v-skeleton-loader type="article, paragraph"></v-skeleton-loader>
      </v-col>
    </v-row>

    <v-btn class="mt-4" color="primary" variant="text" to="/" prepend-icon="mdi-arrow-left">Volver</v-btn>
  </v-container>
</template>
