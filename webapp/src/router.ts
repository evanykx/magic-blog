import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Article from './views/Article.vue';
import Introduction from './views/Introduction.vue';
import Album from './views/Album.vue';
import Project from './views/Project.vue';
import Timeline from './views/Timeline.vue';

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
      path: '/album',
      name: 'album',
      component: Album,
    },
    {
      path: '/article',
      name: 'article',
      component: Article,
    },
    {
      path: '/project',
      name: 'project',
      component: Project,
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
  ],
});
