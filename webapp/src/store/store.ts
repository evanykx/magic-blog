import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwt: null,
    username: 'evanykx',
    activeIndex: '1',
    language: 'English',
    lang: 'en',
  },
  mutations: {
    activeIndexChange(state, idx: string = '1') {
      return (state.activeIndex = idx);
    },
    languageChange(state, lang: string) {
      if (lang === 'en') {
        return (state.language = 'English', state.lang = 'en-US');
      } else if (lang === 'zh') {
        return (state.language = '中文', state.lang = 'zh-CN');
      } else {
        return (state.language = '日本語', state.lang = 'ja-JP');
      }
    },
  },
  actions: {

  },
});
