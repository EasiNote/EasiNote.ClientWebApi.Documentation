<template>
  <div id="legacy-app">
    <Nav id="nav"></Nav>
  </div>
</template>

<script>
import Nav from "./views/Nav.vue";
import EasiNoteProxy from 'easinote-proxy';

export default{
  name: "LegacyApp",
  components:{
    Nav
  },
  async mounted(){
    await EasiNoteProxy.init();
    console.log("EasiNoteProxy init");

    // // 回调函数
    // const callback = ({ type, data }) => {
    //     // 接收从父页面推送过来的数据，开始你的业务逻辑
    // }

    // const messageSdk = EasiNoteProxy.Proxy.createIframeMessageSDK({
    //   messageCallback: callback,  // 传入回调函数，接收从父页面推送过来的数据
    // });
    // messageSdk.init();
  }
}

</script>

<style>
#legacy-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
