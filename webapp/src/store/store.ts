import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwt: null,
    username: 'evanykx',
    activeIndex: '1',
    language: 'English',
  },
  mutations: {
    activeIndexChange(state, idx: string = '1') {
      return (state.activeIndex = idx);
    },
    languageChange(state, lang: string) {
      if (lang === 'en') {
        return (state.language = 'English');
      } else if (lang === 'zh') {
        return (state.language = '中文');
      } else {
        return (state.language = '日本語');
      }
    },
  },
  actions: {

  },
});
