<template>
  <div class="home">
    <h3>请选择对应的标签调试</h3>

    <div style="font-size: 1em">
      这里是未嵌入到文档的独立调试页面，使用嵌入到文档的调试页面，请打开新版调试页面
    </div>

    <br />
    <br />
    <el-link class="link" :href="indexUrl" target="_blank">回到首页</el-link>
    <br />
    <br />
    <br />
    <el-link class="link" :href="newDebugUrl">
      打开新版调试页面
    </el-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  computed: {
    indexUrl: function() {
      return `${this.$store.state.basePath}`;
    },
    newDebugUrl: function() {
      return `${this.$store.state.basePath}debug-pages/`;
    },
  },
};
</script>

<style scoped>
.link {
  font-size: 1.5em;
}
</style>
