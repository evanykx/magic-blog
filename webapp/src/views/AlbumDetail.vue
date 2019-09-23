<template>
  <layout curIdx="2">
    <div slot="main">
      <el-row type="flex" justify="center">
        <div class="detail">
          <el-row :gutter="60">
            <el-col :span="6" v-for="(item, index) of videos" :key="index">
              <video :src="item.url" class="detail-video" @click="handleVideoDialogShow(item.name, item.type)"/>
            </el-col>
          </el-row>
        </div>
      </el-row>
      <!-- Dialog -->
      <el-dialog
        
        :title="video.name"
        :visible.sync="dialogVisible"
        width="60%"
        @opened="handleVideoPlay"
        :before-close="handleDialogClose">
        <el-row type="flex" justify="center" align="center" height="100%" id="player">
        </el-row>
      </el-dialog>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from '@/views/Layout.vue';
import {
  Row, Col, Dialog,
} from 'element-ui';

Vue.component(Dialog.name, Dialog);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

export default Vue.extend({
  name: 'album-detail',
  data() {
    return {
      dialogVisible: false,
      video: {
        name: '',
        type: '',
        url: null,
      },
      videos: [
        {name: 'dance', type: 'mp4', url: require('../assets/audio/dance.mp4')},
        {name: 'firework', type: 'mp4', url: require('../assets/audio/firework.mp4')},
        {name: 'island', type: 'mp4', url: require('../assets/audio/island.mp4')},
        {name: 'train', type: 'mp4', url: require('../assets/audio/train.mp4')},
      ],
    };
  },
  components: {
    Layout,
  },
  methods: {
    handleDialogOpen(url: any, type: string) {
      const v: any = document.getElementById('player');
      v.innerHTML = '<video id="detail-player" width="1080" height="480" controls>' +
          '<source src="' + url + '" type="' + type + '">' +
          '</video>';
    },
    handleVideoPlay() {
      const v: any = document.getElementById('detail-player');
      v.play();
    },
    handleVideoDialogShow(name: string, type: string) {
      this.video.name = name;
      const typeStr = 'video/' + type;
      const urlObj = require('../assets/audio/' + name + '.' + type);
      this.dialogVisible = true;
      this.handleDialogOpen(urlObj, typeStr);
    },
    handleDialogClose() {
      this.dialogVisible = false;
      const v: any = document.getElementById('detail-player');
      v.pause();
      const vd: any = document.getElementById('player');
      vd.innerHTML = '';
    },
  },
});
</script>

<style lang="less">
.detail {
  width: 1080px;
  min-height: 600px;
  &-video {
    width: 270px;
    margin: 20px 0px;
  }
}
</style>