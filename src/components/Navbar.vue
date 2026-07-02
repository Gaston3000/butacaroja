<script setup>
import { ref } from 'vue'

const mostrar = ref(false)

const navItems = [
  { title: 'Inicio', to: '/', icon: 'mdi-home' },
  { title: 'Favoritos', to: '/favoritos', icon: 'mdi-heart' },
]
</script>

<template>
  <v-app-bar color="surface" elevation="2">
    <!-- Boton hamburguesa: solo se muestra en celulares -->
    <v-app-bar-nav-icon class="d-flex d-md-none" @click="mostrar = !mostrar"></v-app-bar-nav-icon>

    <v-app-bar-title class="d-flex align-center ga-2">
      <v-icon icon="mdi-movie-open" color="primary" />
      ButacaRoja
    </v-app-bar-title>

    <v-spacer />

    <!-- Botones: solo en pantallas grandes -->
    <div class="d-none d-md-flex align-center">
      <v-btn v-for="item in navItems" :key="item.to" class="mx-1" :to="item.to" :prepend-icon="item.icon">
        {{ item.title }}
      </v-btn>
    </div>
  </v-app-bar>

  <!-- Menu lateral para celulares -->
  <v-navigation-drawer v-model="mostrar" temporary class="d-md-none">
    <v-list nav>
      <v-list-item
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        link
        :title="item.title"
        :prepend-icon="item.icon"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
