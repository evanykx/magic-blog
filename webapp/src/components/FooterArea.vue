<template>
  <el-row type="flex" justify="center" class="footer-info">
    <span>Open source &copy;MIT License 2019</span>
  </el-row>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  Row, Col,
} from 'element-ui';

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

export default Vue.extend({
  name: 'footer-area',
});
</script>

<style lang="less">
.footer-info {
  height: 60px;
  line-height: 60px;
  margin-top: 2.5rem;
  border-top: 1px solid #DCDFE6 !important;
}
</style>
