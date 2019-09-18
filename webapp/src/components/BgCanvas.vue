<template>
  <canvas id="bg" ></canvas>
</template>

<script lang="ts">
import Vue from 'vue';
import Circle from '../utils/Circle';


export default Vue.extend({
  name: 'bg-canvas',
  mounted() {
    const canvas: any = document.getElementById('bg');
    const body = document.getElementsByTagName('body')[0];
    canvas.width = body.clientWidth;
    canvas.height = body.clientHeight;
    const bound = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    const width = bound.width;
    const height = bound.height;
    const circleConfig = {
        ballNums: 222,
        fillColor: 'rgba(255, 255, 255, .5)',
        radius: 1,
    };
    const circle = new Circle(circleConfig, ctx, width, height);
    circle.init();
  },
  methods: {
    // todo
  },
});

</script>

<style lang="less" scoped>
#bg {
  position: absolute;
  left: 0rem;
  top: 0rem;
  width: 100%;
  height: 100%;
  z-index: -999;
  background: linear-gradient(45deg,rgba(58,181,176,0.8),rgba(86,49,122,0.8));
  filter: alpha(opacity=80);
}
</style>