<template>
  <div class="layout">
    <el-container>
      <el-header>
        <top-menu />
      </el-header>
      <el-main>
        <slot name="main"></slot>
      </el-main>
      <el-footer>
        <footer-area />
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopMenu from '@/components/TopMenu.vue';
import FooterArea from '@/components/FooterArea.vue';
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
  name: 'layout',
  props: {
    curIdx: String,
  },
  components: {
    TopMenu,
    FooterArea,
  },
  mounted() {
    this.$store.commit('activeIndexChange', this.curIdx);
  },
});
</script>

<style lang="less">
body {
  overflow: scroll !important;
  overflow-y:auto !important;
}
.layout {
  width: 100%;
  height: 100%;
  background-color: azure;
  .el-container {
    background-color: white;
  }
}
</style>