<template>
    <div>
      <h2>{{ anime.title }}</h2>
      <p>{{ anime.description }}</p>
      <p>Рейтинг: {{ anime.rating }}</p>
      <router-link to="/">Повернутися на головну</router-link>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      anime: {},
    };
  },
  created() {
    const animeId = this.$route.params.id;
    this.fetchAnimeDetails(animeId)
      .then((animeDetails) => {
        this.anime = animeDetails;
      })
      .catch((error) => {
        console.error('Error fetching anime details:', error);
      });
  },
  methods: {
    fetchAnimeDetails(animeId) {
      const fakeApiEndpoint = `https://example.com/api/anime/${animeId}`;

      return fetch(fakeApiEndpoint)
        .then((response) => response.json())
        .catch((error) => {
          console.error('Error fetching anime details:', error);
          throw error;
        });
    },
  },
};
</script>
