<template>
  <div class="introduce">
    <el-container>
      <el-header>
        <top-menu />
      </el-header>
      <el-main>
        <el-row type="flex" justify="center">
          <div class="intro-main-box">
            <!-- Carousel -->
            <el-carousel height="400px" trigger="click">
              <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
                <img class="carousel-img" :src="item.url" :alt="item.name"/>
              </el-carousel-item>
            </el-carousel>
            <div class="introduction">
              <el-card>
                <div slot="header">
                  <span class="introduction-title">{{ $t('m.skill') }}</span>
                </div>
                <div class="skill-list">
                  <el-row v-for="(item, index) in skills" :key="index">
                    <el-col :span="3">
                      <span>{{ item.lang }}</span>
                    </el-col>
                    <el-col :span="21">
                      <el-progress :percentage="item.percentage" stroke-width="20" text-inside="true" :status="item.status"></el-progress>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
            </div>
            <!-- Timeline -->
            <el-timeline reverse="true" class="intro-timeline">
              <el-timeline-item 
                v-for="(item, index) in timelineItems"
                :key="index"
                :type="item.type"
                :timestamp="item.timestamp" 
                placement="top">
                <el-card>
                  <el-row>
                    <el-col :span="17">
                      <el-container>
                      <el-header>
                        <span class="card-title">{{item.title}}</span>
                      </el-header>
                      <el-main>
                        <span class="card-summary">{{item.summary}}</span>
                      </el-main>
                      <el-footer>
                        <span class="card-commit">{{item.commit}}</span>
                      </el-footer>
                      </el-container>
                    </el-col>
                    <el-col :span="7">
                      <div v-if="item.imgUrl">
                      <img class="card-img" :src="item.imgUrl" />
                      </div>
                      <div v-else>
                        <img class="card-img" src="../assets/placeholder.jpg" />
                      </div>
                    </el-col>
                  </el-row>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-row>
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
  Container, Header, Main, Footer, Aside,
  Row, Col,
  Carousel, CarouselItem,
  Timeline, TimelineItem,
  Card, Progress,
} from 'element-ui';

Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Main.name, Main);
Vue.component(Footer.name, Footer);
Vue.component(Aside.name, Aside);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Timeline.name, Timeline);
Vue.component(TimelineItem.name, TimelineItem);
Vue.component(Card.name, Card);
Vue.component(Progress.name, Progress);

export default Vue.extend({
  name: 'introduction',
  data() {
    return {
      carouselItems: [
        {url: require('../assets/spring.jpg'), name: 'Spring'},
        {url: require('../assets/summer.jpg'), name: 'Summer'},
        {url: require('../assets/autumn.jpg'), name: 'Autumn'},
        {url: require('../assets/winter.jpg'), name: 'Winter'},
      ],
      skills: [
        {lang: 'Java', percentage: '75', status: 'primary'},
        {lang: 'JavaScript', percentage: '90', status: 'success'},
        {lang: 'React', percentage: '85', status: 'success'},
        {lang: 'Vue', percentage: '83', status: 'success'},
        {lang: 'Python', percentage: '60', status: 'warning'},
        {lang: 'Android', percentage: '25', status: 'exception'},
        {lang: 'iOS', percentage: '20', status: 'exception'},
        {lang: 'MongoDB', percentage: '50', status: 'warning'},
        {lang: 'Mysql', percentage: '50', status: 'warning'},
      ],
      timelineItems: [
        {
          timestamp: '2012/6/30',
          title: 'Bachelor degree',
          type: 'success',
          summary: 'After four years university life, \
          I finally graduated from the HuBei College of Police, \
          and achieved the bachelor degree.',
          commit: '2019/9/19 16:08',
          imgUrl: require('../assets/spring.jpg'),
        },
        {
          timestamp: '2015/6/30',
          title: 'Master degree',
          type: 'success',
          summary: 'After four years university life, \
          I finally graduated from the HuBei University of Industry, \
          and achieved the master degree. Then I started working.',
          commit: '2019/9/19 16:08',
        },
        {
          timestamp: '2017/7/2',
          title: 'Japanese Test',
          type: 'success',
          summary: 'After studying japanese for ten months by myself, \
          I passed the test of N2, \
          and got the certificate. Then I went to Japan in October 2017.',
          commit: '2019/9/19 16:38',
        },
        {
          timestamp: '2017/10/4',
          title: 'Arrived in Tokyo',
          type: 'success',
          summary: 'I started my job overseas.',
          commit: '2019/9/19 16:48',
        },
        {
          timestamp: '2019/3/12',
          title: 'Come back to China',
          type: 'success',
          summary: 'I came home for my best lover.',
          commit: '2019/9/19 17:00',
        },
      ],
    };
  },
  components: {
    TopMenu,
    FooterArea,
  },
  mounted() {
    this.$store.commit('activeIndexChange', 1);
  },
});
</script>

<style lang="less">
body {
  overflow: scroll !important;
  overflow-y:auto !important;
}
.introduce {
  width: 100%;
  height: 100%;
  background-color: white;
  .el-container {
    background-color: white;
  }
  .intro {
    &-main-box {
      width: 1080px;
      padding: 0.125rem 0.125rem;
    }
    &-timeline {
      margin-top: 2.5rem;
      padding-right: 40px;
    }
  }
  .carousel-img {
    width: 100%;
    height: 100%;
    border-radius: 0.35rem;
  }
  .introduction {
    margin-top: 2.5rem;
    padding: 0px 40px;
    &-title {
      font-size: 18px;
      font-weight: bolder;
    }
  }
  .card {
    &-title {
      font-size: 18px;
      font-weight: bolder;
      line-height: 60px;
    }
    &-summary {
      font-weight: normal;
    }
    &-commit {
      font-size: 10px;
      color: gray;
      line-height: 60px;
    }
    &-img {
      width: 250px;
      height: 170px;
      border-radius: 0.75rem;
    }
  }

  .skill-list {
    .el-row {
      margin: 0.5rem 0.25rem;
    }
  }
}
</style>