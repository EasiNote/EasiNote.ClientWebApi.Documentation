<template>
  <div>
    <h2>EasiNote 前端回调测试页面</h2>
    <el-button-group>
      <el-button type="primary" @click="switchToView(0)">0 首页</el-button>
      <el-button type="primary" @click="switchToView(1)">1 InvokeMethod</el-button>
      <el-button type="primary" @click="switchToView(2)">2 自定义方法</el-button>
      <el-button type="success" @click="switchToView(3)">3 web卡片元素</el-button>
      <el-button type="success" @click="switchToView(4)">4 多媒体元素</el-button>
      <el-button type="primary" @click="switchToView(5)">5 题库元素</el-button>
      <el-button type="success" @click="switchToView(6)">6 图片可折叠元素</el-button>
    </el-button-group>

    <div>
        <Home v-if="index==0"></Home>
        <D1 v-if="index==1"></D1>
        <D2 v-if="index==2"></D2>
        <D3 v-if="index==3"></D3>
        <D4 v-if="index==4"></D4>
        <D5 v-if="index==5"></D5>
        <D6 v-if="index==6"></D6>
    </div>

  </div>
</template>

<script>

import Home from "./Home.vue"
import D1 from "../components/DebugPage1.vue"
import D2 from "../components/DebugPage2.vue"
import D3 from "../components/DebugPage3.vue"
import D4 from "../components/DebugPage4.vue"
import D5 from "../components/DebugPage5.vue"
import D6 from "../components/DebugPage6.vue"

export default {
  name: "Nav",
  components: {
    Home,
    D1,
    D2,
    D3,
    D4,
    D5,
    D6,
  },
  data(){
    return{
      index:0
    }
  },
  methods: {
    switchToView(index) {
      this.index = index
      // if (index === 0) {
      //   this.routerPush("/");
      // } else {
      //   this.routerPush(`/debugPage${index}`);
      // }
    },

    routerPush(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
  },
};
</script>