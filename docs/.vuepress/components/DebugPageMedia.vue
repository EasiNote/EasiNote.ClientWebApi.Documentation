<template>
  <div class="grid-content">
    
    <div id="createPanel">
      <h3>创建参数</h3>
      <el-button
        type="primary"
        @click="insertMediaElement"
      >
        创建多媒体元素
      </el-button>
    </div>

    <el-row type="flex" class="row-bg" :gutter="5">
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <el-form label-position="top" size="medium" :model="insertMediaData">
            <el-form-item label="多媒体类型(type)">
              <el-select v-model="insertMediaData.type" placeholder="请选择">
                <el-option
                  v-for="item in mediaTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="下载链接(url)">
              <el-input v-model="insertMediaData.url"></el-input>
            </el-form-item>
            <el-form-item label="文件名(fileName) 必须有后缀">
              <el-input v-model="insertMediaData.fileName"></el-input>
            </el-form-item>
            <!-- <el-form-item label="音视频插入类型(mode)">
                                <el-select v-model="insertMediaData.mode" placeholder="请选择">
                                    <el-option v-for="item in mediaInsertModeOptions" :key="item.value"
                                        :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="是否自动播放(isAutoPlay)">
                                <el-checkbox v-model="insertMediaData.isAutoPlay">是否自动播放</el-checkbox>
                            </el-form-item> -->
          </el-form>
        </div>
      </el-col>
    </el-row>

    <h3>数据预览</h3>
    <el-row type="flex" class="row-bg" :gutter="5" style="margin-top: 0.5em">
      <el-input type="textarea" :rows="6" v-model="insertMediaDataJson">
      </el-input>
    </el-row>

    <h3>创建执行</h3>

    <el-row type="flex" class="row-bg" :gutter="5" style="margin-top: 0.5em">
      <el-button
        type="primary"
        @click="insertMediaElement"
      >
        创建多媒体元素
      </el-button>
    </el-row>

  </div>
</template>

<script>
import EasiNoteProxy from "easinote-proxy";

export default {
  name: "DebugPageMedia",

  data() {
    return {
      insertMediaData: {
        type: "video",
        url: "http://vfx.mtime.cn/Video/2019/03/19/mp4/190319212559089721.mp4",
        fileName: "测试.mp4",
        // mode: "online",
        // isAutoPlay: true
      },

      mediaTypeOptions: [
        {
          value: "image",
          label: "image",
        },
        {
          value: "audio",
          label: "audio",
        },
        {
          value: "video",
          label: "video",
        },
      ],

      mediaInsertModeOptions: [
        {
          value: "online",
          label: "online",
        },
        {
          value: "download",
          label: "download",
        },
      ],
    };
  },

  computed: {
    insertMediaDataJson: function () {
      return JSON.stringify(this.insertMediaData, null, 2);
    },
  },

  methods: {
    insertMediaElement() {
      console.log(`创建多媒体元素\r\n${this.insertMediaDataJson}`);
      EasiNoteProxy.Proxy.insertMedia(this.insertMediaDataJson);
      // window.external.InsertMedia(this.insertMediaDataJson);
    },
  },

  mounted() {
    EasiNoteProxy.init();
  },
};
</script>

<style scoped>
#createPanel {
  display: flex;
  justify-content: space-between;
}
</style>