<template>
  <div class="grid-content">
    <h3>6 创建 ImageFoldCard 元素</h3>

    <el-link
      type="primary"
      target="_blank"
      href="https://github.com/EasiNote/EasiNote.ClientWebApi.Documentation/blob/master/zh-CN/apis/direct-api/element-json/image-fold-card.md"
    >
      相关文档
    </el-link>

    <h4>创建参数</h4>
    <el-row class="row-bg" :gutter="5">
      <el-col :span="18">
        <div class="grid-content bg-purple-light">
          <el-form
            label-position="right"
            label-width="360px"
            :model="imageFoldCard"
            size="medium"
          >
            <el-form-item label="标签(tag)">
              <el-input v-model="imageFoldCard.tag"></el-input>
            </el-form-item>
            <el-form-item label="标题(title)">
              <el-input v-model="imageFoldCard.title"></el-input>
            </el-form-item>
            <el-form-item label="标题图片URL(titleImageUrl)">
              <el-input v-model="imageFoldCard.titleImageUrl"></el-input>
            </el-form-item>
            <el-form-item label="内容标题(content)">
              <el-input v-model="imageFoldCard.content"></el-input>
            </el-form-item>
            <el-form-item label="内容图片URL(contentImageUrl)">
              <el-input v-model="imageFoldCard.contentImageUrl"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>

      <el-col :span="6">
        <el-input type="textarea" :rows="16" v-model="imageFoldCardJson">
        </el-input>
      </el-col>
    </el-row>

    <el-button
      style="margin-left: 10em"
      type="primary"
      @click="createImageFoldCardson"
      >创建 ImageFoldCard 元素</el-button
    >
  </div>
</template>

<script>
import EasiNoteProxy from 'easinote-proxy';

export default {
  name: "DebugPageImageFoldCard",

  data() {
    return {
      imageFoldCard: {
        tag: "seewo-tiku-test",
        title: "单选题",
        titleImageUrl:
          "http://files.eduuu.com/img/2011/08/18/162033_4e4ccb510ed70.jpg",
        content: "答案与解析",
        contentImageUrl:
          "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b219ebc4b74543a90234b6511b178a82b901147b.jpg",
        //isCollapsed: true,
        //scaleRatio: 1,
      },
    };
  },

  computed: {
    imageFoldCardJson: function () {
      return JSON.stringify(this.imageFoldCard, null, 2);
    },
  },

  methods: {
    createImageFoldCardson() {
      console.log(`创建图片可折叠元素\r\n${this.imageFoldCardJson}`);
      EasiNoteProxy.Proxy.insertElementByJson("ImageFoldCard", this.imageFoldCardJson);
      // window.external.InsertElementByJson(
      //   "ImageFoldCard",
      //   this.imageFoldCardJson
      // );
    },

  },

  mounted () {
    EasiNoteProxy.init();
  }

};
</script>