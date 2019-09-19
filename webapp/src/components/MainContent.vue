<template>
  <el-row>
    <!-- main -->
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
  name: 'main-content',
});
</script>

<style lang="less">

</style>
