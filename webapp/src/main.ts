import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import vueI18n from 'vue-i18n';

Vue.config.productionTip = false;

Vue.use(vueI18n);

const i18n = new vueI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': require('@/i18n/zh'),
    'en-US': require('@/i18n/en'),
    'ja-JP': require('@/i18n/ja'),
  },
});

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
