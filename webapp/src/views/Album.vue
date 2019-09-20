<template>
  <layout curIdx="2">
    <div slot="main">
      <el-row type="flex" justify="center">
        <div class="album">
          <el-row :gutter="60">
            <el-col :span="6">
              <el-card :body-style="{ padding: '2px' }" :style="{ width: '270px', margin: '20px 0px' }">
                <el-image :src="photos.url" :preview-src-list="photos.srcList" class="album-thumbnail"/>
                <el-divider></el-divider>
                <div style="padding: 0.25rem;text-align:center;">
                  <span>Photo</span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{ padding: '2px' }" :style="{ width: '270px', margin: '20px 0px' }">
                <video src="../assets/audio/island.mp4" class="album-thumbnail" @click="handleCardClick()"/>
                <el-divider></el-divider>
                <div style="padding: 0.25rem;text-align:center;">
                  <span>Video</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-row>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from '@/views/Layout.vue';
import {
  Row, Col, Image,
  Card, Divider,
} from 'element-ui';

Vue.component(Image.name, Image);
Vue.component(Card.name, Card);
Vue.component(Divider.name, Divider);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

export default Vue.extend({
  name: 'album',
  data() {
    return {
      photos: {
        url: require('../assets/album/a1.jpg'),
        srcList: [
          require('../assets/album/a1.jpg'),
          require('../assets/album/a2.jpg'),
          require('../assets/album/a3.jpg'),
          require('../assets/album/a4.jpg'),
          require('../assets/album/a5.jpg'),
          require('../assets/album/a6.jpg'),
          require('../assets/album/a7.jpg'),
          require('../assets/album/a8.jpg'),
          require('../assets/album/a9.jpg'),
        ],
      },
    };
  },
  methods: {
    handleCardClick() {
      this.$router.push({name: 'album-detail'});
    },
  },
  components: {
    Layout,
  },
});
</script>

<style lang="less">
.album {
  width: 1080px;
  min-height: 600px;
  &-thumbnail {
    width: 266px;
    height: 270px;
  }
}
</style>