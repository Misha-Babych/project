<template>
    <div>
      <h2>Anime List</h2>
      <ul>
        <li v-for="anime in animeList" :key="anime.id">
          <router-link :to="{ name: 'anime', params: { id: anime.id } }">{{ anime.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['animeList'],
  }
  </script>
  