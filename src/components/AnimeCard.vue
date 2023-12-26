<template>
    <div>
      <h2>{{ anime.title }}</h2>
      <p>{{ anime.description }}</p>
      <p>Rating: {{ anime.rating }}</p>
      <button @click="addToWatchlist">Add to Watchlist</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      anime: Object,
    },
    methods: {
      addToWatchlist() {
      },
    },
  };
  </script>
  