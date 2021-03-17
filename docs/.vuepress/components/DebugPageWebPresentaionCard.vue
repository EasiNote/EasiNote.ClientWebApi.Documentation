<template>
  <div class="grid-content">

    <h3>创建参数</h3>
    
    <el-row class="row-bg" :gutter="5">
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <el-form
            label-position="top"
            :model="webPresentationCard"
            size="medium"
          >
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
            <!-- <el-form-item label="授课端窗口大小(displayFrameSize)">
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
            </el-form-item> -->
            <!-- <el-form-item label="授课端 web 页窗口的显示模式(displayMode)">
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
            </el-form-item> -->
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
          </el-form>
        </div>
      </el-col>
    </el-row>

    <h3>数据预览</h3>

    <el-row class="row-bg" :gutter="5">
      <el-col :span="24">
        <el-input type="textarea" :rows="16" v-model="webPresentationCardJson">
        </el-input>
      </el-col>
    </el-row>

    <h3>创建执行</h3>

    <el-button
      style="margin-top: 0.1em"
      type="primary"
      @click="createWebPresentationCard"
      >创建 web presentation card 元素</el-button
    >
    
  </div>
</template>

<script>
import EasiNoteProxy from "easinote-proxy";

export default {
  name: "DebugPageWebPresentaionCard",

  data() {
    return {
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
        // displayFrameSize: {
        //   width: 1000,
        //   height: 500,
        // },
        // displayMode: "Window",
        layoutSize: {
          width: 200,
          height: 200,
        },
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
    };
  },

  computed: {
    webPresentationCardJson: function () {
      return JSON.stringify(this.webPresentationCard, null, 2);
    },
  },

  methods: {
    createWebPresentationCard() {
      console.log(
        `创建 web 卡片元素(WebPresentationCard)\r\n${this.webPresentationCardJson}`
      );
      EasiNoteProxy.Proxy.insertElementByJson(
        "WebPresentationCard",
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