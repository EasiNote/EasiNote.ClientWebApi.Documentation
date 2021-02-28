<template>
  <div>
    <h2>EasiNote 前端回调测试页面</h2>
    <el-button-group>
      <el-button type="primary" @click="switchToView(0)">0 首页</el-button>
      <el-button type="primary" @click="switchToView(1)">1 通用回调 InvokeMethod</el-button>
      <el-button type="primary" @click="switchToView(2)">2 执行自定义方法</el-button>
      <el-button type="primary" @click="switchToView(3)">3 创建 web presentation card 元素</el-button>
      <el-button type="primary" @click="switchToView(4)">4 插入多媒体（图片，音视频）元素</el-button>
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