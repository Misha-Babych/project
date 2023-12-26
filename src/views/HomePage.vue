<template>
  <div>
    <h1>Welcome to Anime Catalog</h1>
    
    <AnimeList :animeList="latestAnime" />

    <div v-for="anime in latestAnime" :key="anime.id">
      <AnimeCard :anime="anime" />
    </div>
  </div>
</template>

<script>
import AnimeList from '@/components/AnimeList.vue';
import AnimeCard from '@/components/AnimeCard.vue';

export default {
  name: 'HomePage',
  data() {
    return {
      latestAnime: [
        { id: 1, title: 'Anime 1', description: 'Description 1', rating: 9.0 },
        { id: 2, title: 'Anime 2', description: 'Description 2', rating: 8.5 },
        { id: 3, title: 'Anime 3', description: 'Description 3', rating: 9.2 },
      ],
    };
  },
  components: {
    AnimeList,
    AnimeCard,
  },
};
</script>
