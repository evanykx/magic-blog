import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwt: null,
    username: 'evanykx',
    activeIndex: '1',
    lang: 'en-US',
  },
  mutations: {
    activeIndexChange(state, idx: string = '1') {
      return (state.activeIndex = idx);
    },
    languageChange(state, lang: string) {
      if (lang === 'en') {
        return (state.lang = 'en-US');
      } else if (lang === 'zh') {
        return (state.lang = 'zh-CN');
      } else if (lang === 'ja') {
        return (state.lang = 'ja-JP');
      }
    },
  },
  actions: {

  },
});
