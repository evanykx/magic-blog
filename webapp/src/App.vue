<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
  },
  mounted() {
    this.$i18n.locale = this.$store.state.lang;
  },
});

</script>

<style lang="less">
html, body {
  width: 100%;
  height: 100%;
  padding: 0rem 0rem;
  margin: 0rem 0rem;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
