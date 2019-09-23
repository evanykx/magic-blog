<template>
  <layout curIdx="6">
    <div slot="main">
      album
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from '@/views/Layout.vue';
import {
  Container, Header, Main, Footer,
  Row, Col,
} from 'element-ui';

Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Main.name, Main);
Vue.component(Footer.name, Footer);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

export default Vue.extend({
  name: 'about',
  components: {
    Layout,
  },
});
</script>

<style lang="less">

</style>