import axios from 'axios';

const state = {
  animeDetails: {},
};

const mutations = {
  SET_ANIME_DETAILS(state, animeDetails) {
    state.animeDetails = animeDetails;
  },
};

const actions = {
  async fetchAnimeDetails({ commit }, animeId) {
    try {
      const response = await axios.get(`https://example.com/api/anime/${animeId}`);
      
      const { data } = response;
      
      commit('SET_ANIME_DETAILS', data);
      return data;
    } catch (error) {
      console.error('Error fetching anime details:', error);
      throw error;
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
