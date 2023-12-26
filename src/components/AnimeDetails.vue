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
    data() {
      return {
        anime: {},
      };
    },
    methods: {
      addToWatchlist() {
        this.$store.dispatch('addToWatchlist', this.anime);
      },
    },
    created() {
      const animeId = this.$route.params.id;
  
      this.$store.dispatch('anime/fetchAnimeDetails', animeId)
        .then(anime => {
          this.anime = anime;
        })
        .catch(error => {
          console.error('Error fetching anime details:', error);
        });
    },
  };
  </script>
  