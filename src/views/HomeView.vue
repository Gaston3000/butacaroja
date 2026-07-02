<script setup>
import Card from '@/components/Card.vue'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { peliculasDemo, generosDemo } from '@/demo/datosDemo.js'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
// Si todavia no cargaste tu API key en el .env, la app funciona en modo demo
const MODO_DEMO = !API_KEY || API_KEY === 'tu_api_key_aca'

const route = useRoute()
const router = useRouter()

const peliculas = ref([])
const cargando = ref(true)
const generos = ref([])
const busqueda = ref('')
const generoElegido = ref(null)
const titulo = ref('Populares') // lo que se muestra arriba de la grilla

// Traigo la lista de generos una sola vez para el filtro
if (MODO_DEMO) {
  generos.value = generosDemo
} else {
  fetch(BASE_URL + '/genre/movie/list?language=es-MX&api_key=' + API_KEY)
    .then((res) => res.json())
    .then((data) => (generos.value = data.genres || []))
    .catch((err) => console.log(err))
}

// Peliculas populares (lo que se ve al entrar, sin buscar ni filtrar)
const cargarPopulares = () => {
  if (MODO_DEMO) {
    peliculas.value = peliculasDemo
    cargando.value = false
    return
  }
  cargando.value = true
  fetch(BASE_URL + '/movie/popular?language=es-MX&page=1&api_key=' + API_KEY)
    .then((res) => res.json())
    .then((data) => (peliculas.value = data.results || []))
    .catch((err) => console.log(err))
    .finally(() => (cargando.value = false))
}

// Buscar por titulo
const cargarBusqueda = (texto) => {
  if (MODO_DEMO) {
    const t = texto.toLowerCase()
    peliculas.value = peliculasDemo.filter((p) => p.title.toLowerCase().includes(t))
    cargando.value = false
    return
  }
  cargando.value = true
  fetch(BASE_URL + '/search/movie?language=es-MX&query=' + texto + '&api_key=' + API_KEY)
    .then((res) => res.json())
    .then((data) => (peliculas.value = data.results || []))
    .catch((err) => console.log(err))
    .finally(() => (cargando.value = false))
}

// Filtrar por genero
const cargarGenero = (id) => {
  if (MODO_DEMO) {
    peliculas.value = peliculasDemo.filter((p) => p.genre_ids.includes(Number(id)))
    cargando.value = false
    return
  }
  cargando.value = true
  fetch(BASE_URL + '/discover/movie?language=es-MX&with_genres=' + id + '&api_key=' + API_KEY)
    .then((res) => res.json())
    .then((data) => (peliculas.value = data.results || []))
    .catch((err) => console.log(err))
    .finally(() => (cargando.value = false))
}

// Miro la URL y decido que mostrar: ?q=... busqueda, ?g=... genero, o populares.
// Sincronizo tambien el buscador y el select para que reflejen la URL.
const cargarSegunUrl = () => {
  busqueda.value = route.query.q || ''
  generoElegido.value = route.query.g ? Number(route.query.g) : null

  if (route.query.q) {
    titulo.value = 'Resultados de "' + route.query.q + '"'
    cargarBusqueda(route.query.q)
  } else if (route.query.g) {
    const g = generos.value.find((x) => x.id == route.query.g)
    titulo.value = g ? 'Género: ' + g.name : 'Filtrado por género'
    cargarGenero(route.query.g)
  } else {
    titulo.value = 'Populares'
    cargarPopulares()
  }
}

cargarSegunUrl() // primera carga
// Cada vez que cambia la URL (ej: tocar "Inicio" teniendo una busqueda), recargo
watch(() => route.fullPath, cargarSegunUrl)

// Estos solo cambian la URL; la carga real la hace cargarSegunUrl al detectar el cambio
const buscar = () => {
  if (!busqueda.value) {
    router.push('/')
  } else {
    router.push({ path: '/', query: { q: busqueda.value } })
  }
}

const filtrarPorGenero = () => {
  if (generoElegido.value == null) {
    router.push('/')
  } else {
    router.push({ path: '/', query: { g: generoElegido.value } })
  }
}
</script>

<template>
  <v-container fluid>
    <h1 class="mb-4">{{ titulo }}</h1>

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
          @click:clear="buscar"
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
