<template>
  <div>
    <h2>EasiNote 前端回调测试页面</h2>
    <el-button-group>
      <el-button type="primary" @click="switchToView(0)">0 首页</el-button>
      <el-button type="primary" @click="switchToView(1)">1 InvokeMethod</el-button>
      <el-button type="primary" @click="switchToView(2)">2 自定义方法</el-button>
      <el-button type="primary" @click="switchToView(3)">3 web卡片元素</el-button>
      <el-button type="primary" @click="switchToView(4)">4 多媒体元素</el-button>
      <el-button type="primary" @click="switchToView(5)">5 题库元素</el-button>
      <el-button type="primary" @click="switchToView(6)">6 图片可折叠元素</el-button>
    </el-button-group>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Nav",
  componenets: {},
  methods: {
    switchToView(index) {
      if (index === 0) {
        this.routerPush("/");
      } else {
        this.routerPush(`/debugPage${index}`);
      }
    },

    routerPush(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
  },
};
</script>