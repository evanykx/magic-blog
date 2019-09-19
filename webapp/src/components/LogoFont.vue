<template>
  <div class="logo">
    <span class="logo-font" @click="handleClick">{{ $t('m.logo') }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'logo-font',
  methods: {
    handleClick() {
      this.$router.push('/');
    },
  },
});
</script>

<style lang="less" scoped>
.logo {
  height: 60px;
  line-height: 60px;
  padding-left: 2.5rem;
  &-font {
    display: inline-block;
    font-size: 28px;
    font-weight: bolder;
    background: linear-gradient(45deg,rgb(106, 250, 245),rgb(245, 242, 61),rgb(218, 69, 59));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
}
</style>
