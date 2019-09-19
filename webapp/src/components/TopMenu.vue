<template>
    <el-row  class="top-menu">
      <el-col :span="10">
        <logo-font />
      </el-col>
      <el-col :span="14">
        <el-menu 
          mode="horizontal"
          :default-active="activeIndex"
          @select="handleSelect">
          <el-menu-item index="1">{{ $t('m.home') }}</el-menu-item>
          <el-menu-item index="2">{{ $t('m.category') }}</el-menu-item>
          <el-menu-item index="3">{{ $t('m.article') }}</el-menu-item>
          <el-menu-item index="4">{{ $t('m.project') }}</el-menu-item>
          <el-menu-item index="5">{{ $t('m.timeline') }}</el-menu-item>
          <el-menu-item index="6">{{ $t('m.about') }}</el-menu-item>
          <el-menu-item disabled>|</el-menu-item>
          <el-submenu index="7">
            <template slot="title">{{language}}</template>
            <el-menu-item index="7-1">{{ $t('m.chinese') }}</el-menu-item>
            <el-menu-item index="7-2">{{ $t('m.english') }}</el-menu-item>
            <el-menu-item index="7-3">{{ $t('m.japanese') }}</el-menu-item>
          </el-submenu>
          <el-menu-item disabled>|</el-menu-item>
          <el-menu-item index="8">{{ $t('m.signin') }}</el-menu-item>
          <el-menu-item index="9">{{ $t('m.signup') }}</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
</template>

<script lang="ts">
import Vue from 'vue';
import LogoFont from '@/components/LogoFont.vue';
import {
  Row, Col,
  Menu, MenuItem, MenuItemGroup, Submenu,
  Notification,
} from 'element-ui';

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(MenuItemGroup.name, MenuItemGroup);
Vue.component(Submenu.name, Submenu);

export default Vue.extend({
  name: 'top-menu',
  props: {
  },
  components: {
    LogoFont,
  },
  computed: {
    activeIndex: {
      get() {
        return this.$store.state.activeIndex;
      },
    },
    language: {
      get() {
        return this.$store.state.language;
      },
    },
  },
  methods: {
    handleSelect(key: string, keyPath: []) {
      if (key.startsWith('7')) {
        if (key === '7-1') {
          this.$i18n.locale = 'zh-CN';
          this.$store.commit('languageChange', 'zh');
        } else if (key === '7-3') {
          this.$i18n.locale = 'ja-JP';
          this.$store.commit('languageChange', 'jp');
        } else {
          this.$i18n.locale = 'en-US';
          this.$store.commit('languageChange', 'en');
        }
      } else {
        if (key === '1') {
          this.$router.push('/');
        }
        this.$store.commit('activeIndexChange', key);
      }

      Notification({title: 'Notice', message: key});
    },
  },
});
</script>

<style lang="less">
.top-menu {
  border-bottom: 1px solid #DCDFE6 !important;
}
</style>
