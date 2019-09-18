<template>
  <div class="home">
    <bg-canvas />
    <div id="home-main">
      <el-row type="flex" justify="center">
        <img
          src="../assets/me.jpg"
          width="200px"
          height="200px"
          style="border-radius: 100px"
        />
      </el-row>
      <el-row type="flex" justify="center" style="margin-top: 2rem;">
        <el-col :span="6">
          <el-row type="flex" justify="center">
            <h1 style="color: whitesmoke;">The world is his who enjoys it</h1>
          </el-row>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top: 2rem;">
        <el-col :span="6">
          <el-row type="flex" justify="center">
            <el-link href="/" style="color: whitesmoke;font-size:20px;">Home</el-link>
            <el-link style="margin-left: 0.75rem;color: whitesmoke;font-size:20px;" @click="handleLink('Category')">Category</el-link>
            <el-link style="margin-left: 0.75rem;color: whitesmoke;font-size:20px;" @click="handleLink('Article')">Article</el-link>
            <el-link style="margin-left: 0.75rem;color: whitesmoke;font-size:20px;" @click="handleLink('Project')">Project</el-link>
            <el-link style="margin-left: 0.75rem;color: whitesmoke;font-size:20px;" @click="handleLink('Timeline')">Timeline</el-link>
            <el-link href="/about" style="margin-left: 0.75rem;color: whitesmoke;font-size:20px;">About</el-link>
          </el-row>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top: 2rem;">
        <el-col :span="6">
          <el-row type="flex" justify="center">
            <el-button icon="el-icon-search" circle @click="handleBtn('search')"></el-button>
            <el-button type="primary" icon="el-icon-edit" circle @click="handleBtn('edit')"></el-button>
            <el-button type="success" icon="el-icon-check" circle @click="handleBtn('check')"></el-button>
            <el-button type="info" icon="el-icon-message" circle @click="handleBtn('message')"></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click="handleBtn('star')"></el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click="handleBtn('delete')"></el-button>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BgCanvas from '@/components/BgCanvas.vue';
import { Row, Col, Image, Button, Link, Message, Notification } from 'element-ui';

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Image.name, Image);
Vue.component(Button.name, Button);
Vue.component(Link.name, Link);
Vue.component(Message.name, Message);

export default Vue.extend({
  name: 'home',
  data: {
  },
  components: {
    BgCanvas,
  },
  methods: {
    handleLink(link: string) {
      Message({message: link});
    },
    handleBtn(link: string) {
      Notification({title: 'Notice', message: link});
    },
  },
});
</script>


<style lang="less">
body {
  overflow:-Scroll !important;
  overflow-y:hidden !important;
}
#home {
  width: 100%;
  height: 100%;
  &-main {
    position: absolute;
    left: 0rem;
    top: 0rem;
    width: 100%;
    height: 100%;
    padding-top: 15rem;
  }
}

</style>