<template>
  <div class="grid-content">
    <h3>3 创建 web presentation card 元素</h3>

    <el-link
      type="primary"
      target="_blank"
      :href="documentUrl"
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
            :model="webPresentationCard"
            size="medium"
          >
            <el-form-item label="具体类型">
              <el-select v-model="webPresentationCardType" placeholder="请选择">
                <el-option
                  v-for="item in webPresentationCardTypes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="标签(tag)">
              <el-input v-model="webPresentationCard.tag"></el-input>
            </el-form-item>
            <el-form-item label="标题(title)">
              <el-input v-model="webPresentationCard.title"></el-input>
            </el-form-item>
            <el-form-item label="缩略图(thumbnailUrl)">
              <el-input v-model="webPresentationCard.thumbnailUrl"></el-input>
            </el-form-item>
            <el-form-item label="点击按钮的内容(buttonContent)">
              <el-input v-model="webPresentationCard.buttonContent"></el-input>
            </el-form-item>
            <el-form-item label="备课端web页(editingUrl)">
              <el-input v-model="webPresentationCard.editingUrl"></el-input>
            </el-form-item>
            <el-form-item label="授课端web页(displayUrl)">
              <el-input v-model="webPresentationCard.displayUrl"></el-input>
            </el-form-item>
            <el-form-item label="备课端窗口大小(editingFrameSize)">
              <el-row class="row-bg" :gutter="5">
                <el-col :span="6">
                  <div class="grid-content bg-purple-light">
                    <el-input
                      v-model="webPresentationCard.editingFrameSize.width"
                    >
                    </el-input>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple-light">
                    <el-input
                      v-model="webPresentationCard.editingFrameSize.height"
                    >
                    </el-input>
                  </div>
                </el-col>
              </el-row>
            </el-form-item>

            <el-form-item label="授课端 web 页窗口的显示模式(displayMode)">
              <el-select
                v-model="webPresentationCard.displayMode"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in displayModeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="授课端窗口大小(displayFrameSize)" v-if="webPresentationCard.displayMode == 'Window'">
              <el-row class="row-bg" :gutter="5">
                <el-col :span="6">
                  <div class="grid-content bg-purple-light">
                    <el-input
                      v-model="webPresentationCard.displayFrameSize.width"
                    >
                    </el-input>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple-light">
                    <el-input
                      v-model="webPresentationCard.displayFrameSize.height"
                    >
                    </el-input>
                  </div>
                </el-col>
              </el-row>
            </el-form-item>

            <el-form-item label="关闭按钮位置(closeButtonPosition)" v-if="webPresentationCard.displayMode == 'FullScreen'">
              <el-input v-model="webPresentationCard.closeButtonPosition" placeholder="left,top,right,bottom"></el-input>
            </el-form-item>

            <el-form-item label="元素初始大小(layoutSize)">
              <el-row class="row-bg" :gutter="5">
                <el-col :span="6">
                  <div class="grid-content bg-purple-light">
                    <el-input v-model="webPresentationCard.layoutSize.width">
                    </el-input>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple-light">
                    <el-input v-model="webPresentationCard.layoutSize.height">
                    </el-input>
                  </div>
                </el-col>
              </el-row>
            </el-form-item>

            <el-form-item label="应用ID(appResourceId)">
              <el-input v-model="webPresentationCard.appResourceId"></el-input>
            </el-form-item>
            <el-form-item label="是否鉴权(auth)">
              <el-switch v-model="webPresentationCard.auth"></el-switch>
            </el-form-item>

          </el-form>
        </div>
      </el-col>

      <el-col :span="6">
        <el-input type="textarea" :rows="26" v-model="webPresentationCardJson">
        </el-input>
      </el-col>
    </el-row>

    <el-button
      style="margin-left: 10em"
      type="primary"
      @click="createWebPresentationCard"
      >创建 web presentation card 元素</el-button
    >
  </div>
</template>

<script>
import EasiNoteProxy from "easinote-proxy";

export default {
  name: "DebugPage3",

  data() {
    return {
      webPresentationCardType: "webPresentationCard",
      webPresentationCard: {
        tag: "seewo-tiku-test",
        title: "希沃题库（测试）",
        // isTitleVisible: true,
        thumbnailUrl:
          "http://n.sinaimg.cn/sinakd20200605ac/416/w640h576/20200605/301b-iurnkpq9297963.jpg",
        // isThumbnailVisible: true,
        buttonContent: "点击",
        editingUrl: "https://bilibili.com",
        displayUrl: "https://www.zhihu.com/",
        editingFrameSize: {
          width: 1000,
          height: 500,
        },
        displayFrameSize: {
          width: 1000,
          height: 500,
        },
        displayMode: "FullScreen",
        closeButtonPosition:"",
        layoutSize: {
          width: 200,
          height: 200,
        },
        appResourceId: "",
        auth: false,
      },

      displayModeOptions: [
        {
          value: "Window",
          label: "Window",
        },
        {
          value: "FullScreen",
          label: "FullScreen",
        },
      ],

      zoomModeOptions: [
        {
          value: "Scale",
          label: "Scale",
        },
        {
          value: "Adaptive",
          label: "Adaptive",
        },
      ],

      webPresentationCardTypes: [
        {
          value: "webPresentationCard",
          label: "webPresentationCard",
        },
        {
          value: "webPresentationCard2",
          label: "webPresentationCard2",
        },
      ],

    };
  },

  computed: {
    documentUrl: function() {
      return `${this.$store.state.basePath}apis/direct-api-element/web-presentation-card.html`;
    },

    webPresentationCardJson: function() {
      return JSON.stringify(this.webPresentationCard, null, 2);
    },
  },

  methods: {
    createWebPresentationCard() {
      console.log(
        `创建 web 卡片元素(${this.webPresentationCardType})\r\n${this.webPresentationCardJson}`
      );
      EasiNoteProxy.Proxy.insertElementByJson(
        this.webPresentationCardType,
        this.webPresentationCardJson
      );

      // window.external.InsertElementByJson(
      //   "WebPresentationCard",
      //   this.webPresentationCardJson
      // );
    },
  },

  mounted() {
    EasiNoteProxy.init();
  },
};
</script>
