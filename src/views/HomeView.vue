<script setup>
import Card from '@/components/Card.vue'
import { ref } from 'vue'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const peliculas = ref([])
const cargando = ref(true)
const busqueda = ref('')
const generos = ref([])
const generoElegido = ref(null)

// Peliculas populares (es lo que se ve al entrar a la app)
const cargarPopulares = () => {
  cargando.value = true
  fetch(BASE_URL + '/movie/popular?language=es-MX&page=1&api_key=' + API_KEY)
    .then((res) => res.json())
    .then((data) => (peliculas.value = data.results || []))
    .catch((err) => console.log(err))
    .finally(() => (cargando.value = false))
}

// Traigo la lista de generos una sola vez para el filtro
fetch(BASE_URL + '/genre/movie/list?language=es-MX&api_key=' + API_KEY)
  .then((res) => res.json())
  .then((data) => (generos.value = data.genres || []))
  .catch((err) => console.log(err))

// Buscar peliculas por titulo
const buscar = () => {
  if (!busqueda.value) {
    cargarPopulares()
    return
  }
  generoElegido.value = null
  cargando.value = true
  fetch(BASE_URL + '/search/movie?language=es-MX&query=' + busqueda.value + '&api_key=' + API_KEY)
    .then((res) => res.json())
    .then((data) => (peliculas.value = data.results || []))
    .catch((err) => console.log(err))
    .finally(() => (cargando.value = false))
}

// Filtrar por genero
const filtrarPorGenero = () => {
  if (generoElegido.value == null) {
    cargarPopulares()
    return
  }
  busqueda.value = ''
  cargando.value = true
  fetch(BASE_URL + '/discover/movie?language=es-MX&with_genres=' + generoElegido.value + '&api_key=' + API_KEY)
    .then((res) => res.json())
    .then((data) => (peliculas.value = data.results || []))
    .catch((err) => console.log(err))
    .finally(() => (cargando.value = false))
}

cargarPopulares()
</script>

<template>
  <v-container fluid>
    <h1 class="mb-4">Populares</h1>

    <!-- Buscador + filtro por genero -->
    <v-row>
      <v-col cols="12" md="8">
        <v-text-field
          v-model="busqueda"
          label="Buscar película por título"
          prepend-inner-icon="mdi-magnify"
          clearable
          @keyup.enter="buscar"
          @click:prepend-inner="buscar"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          v-model="generoElegido"
          :items="generos"
          item-title="name"
          item-value="id"
          label="Filtrar por género"
          clearable
          @update:model-value="filtrarPorGenero"
        ></v-select>
      </v-col>
    </v-row>

    <!-- Grilla de peliculas -->
    <v-row>
      <template v-if="!cargando">
        <v-col v-for="pelicula in peliculas" :key="pelicula.id" cols="12" sm="6" md="4" lg="3">
          <Card :pelicula="pelicula" />
        </v-col>
      </template>
      <!-- Mientras carga muestro esqueletos (como en clase) -->
      <template v-else>
        <v-col v-for="n in 8" :key="n" cols="12" sm="6" md="4" lg="3">
          <v-skeleton-loader height="400" type="image, article"></v-skeleton-loader>
        </v-col>
      </template>
    </v-row>

    <p v-if="!cargando && peliculas.length == 0" class="text-center mt-6">
      No se encontraron películas.
    </p>
  </v-container>
</template>
