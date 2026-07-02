# 🎬 ButacaRoja

Trabajo Práctico de **Aplicaciones para Dispositivos Móviles**.

Aplicación web hecha con **Vue 3 + Vuetify** para buscar películas, ver su información y guardar las favoritas. Los datos se obtienen de la API de [The Movie Database (TMDB)](https://www.themoviedb.org/).

## Funcionalidades

- Listado de películas populares en la página de inicio.
- Buscador de películas por título.
- Filtro por género.
- Página de detalle con póster, sinopsis, año, puntuación y géneros.
- Agregar / quitar de favoritos (se guardan en el navegador con `localStorage`).
- Diseño *mobile first* (se adapta al celular y a la compu).

## Tecnologías

- Vue 3 (Composition API con `<script setup>`)
- Vue Router
- Vuetify 4 + Material Design Icons
- Vite
- API de TMDB (`fetch`)

## Cómo levantarlo

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Conseguir una API key de TMDB (es gratis):
   - Crear una cuenta en https://www.themoviedb.org/
   - Ir a **Configuración → API** y pedir una API key de uso personal.
   - Copiar la **API Key (v3 auth)**.

3. Crear un archivo `.env` en la raíz (podés copiar `.env.example`) y pegar la clave:

   ```
   VITE_TMDB_API_KEY=tu_api_key
   ```

4. Levantar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

> **Modo demo:** si todavía no cargaste una API key, la app arranca igual con un
> conjunto de películas de ejemplo, así se puede probar sin configurar nada.
> En cuanto pongas tu clave en el `.env`, pasa a usar los datos reales de TMDB.

## Autor

Gastón Nicolás Costabella
