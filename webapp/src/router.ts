import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Article from './views/Article.vue';
import Introduction from './views/Introduction.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: Introduction,
    },
    {
      path: '/article',
      name: 'article',
      component: Article,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
