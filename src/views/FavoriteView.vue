<script setup>
import Card from '@/components/Card.vue'
import { ref } from 'vue'

// Leo las peliculas favoritas guardadas en el navegador
const favoritos = ref(JSON.parse(localStorage.getItem('favoritos')) || [])
</script>

<template>
  <v-container fluid>
    <h1 class="mb-4">Mis favoritos</h1>

    <v-row v-if="favoritos.length > 0">
      <v-col v-for="pelicula in favoritos" :key="pelicula.id" cols="12" sm="6" md="4" lg="3">
        <Card :pelicula="pelicula" />
      </v-col>
    </v-row>

    <!-- Mensaje cuando todavia no hay favoritos -->
    <div v-else class="text-center mt-10">
      <v-icon icon="mdi-heart-broken" size="64" color="grey"></v-icon>
      <p class="mt-2">Todavía no agregaste películas a favoritos.</p>
      <v-btn class="mt-4" color="primary" to="/">Explorar películas</v-btn>
    </div>
  </v-container>
</template>
