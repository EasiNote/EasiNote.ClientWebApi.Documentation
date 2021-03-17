<template>
  <div class="grid-content">
    
    <div id="createPanel">
      <h3>创建参数</h3>
      <el-button type="primary" @click="createQuestionCard"
        >创建题库元素</el-button
      >
    </div>

    <el-row class="row-bg" :gutter="5">
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <el-form label-position="top" :model="questionCard" size="medium">
            <el-form-item label="标签(tag)">
              <el-input v-model="questionCard.tag"></el-input>
            </el-form-item>
            <el-form-item label="问题类型(questionType)">
              <el-input v-model="questionCard.questionType"></el-input>
            </el-form-item>
            <el-form-item label="题干图片URL(questionTitleUrl)">
              <el-input v-model="questionCard.questionTitleUrl"></el-input>
            </el-form-item>
            <el-form-item label="题目内容图片URL(questionContentUrl)">
              <el-input v-model="questionCard.questionContentUrl"></el-input>
            </el-form-item>
            <el-form-item label="答案图片URL(answerUrl)">
              <el-input v-model="questionCard.answerUrl"></el-input>
            </el-form-item>
            <el-form-item label="解析图片URL(analysisUrl)">
              <el-input v-model="questionCard.analysisUrl"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>

    <h3>数据预览</h3>

    <el-row class="row-bg" :gutter="5">
      <el-col :span="24">
        <el-input type="textarea" :rows="10" v-model="questionCardJson">
        </el-input>
      </el-col>
    </el-row>

    <h3>创建执行</h3>

    <el-button
      style="margin-top: 0.1em"
      type="primary"
      @click="createQuestionCard"
      >创建题库元素</el-button
    >
  </div>
</template>

<script>
import EasiNoteProxy from "easinote-proxy";

export default {
  name: "DebugPageTiku",

  data() {
    return {
      questionCard: {
        tag: "seewo-tiku-test",
        questionType: "单选题",
        questionTitleUrl:
          "http://files.eduuu.com/img/2011/08/18/162033_4e4ccb510ed70.jpg",
        questionContentUrl:
          "http://5b0988e595225.cdn.sohucs.com/images/20170914/e22bca324ab242f3bc91295b855f4d6d.jpeg",
        answerUrl:
          "http://files.eduuu.com/img/2012/07/11/100611_4ffcdf9349df0.jpg",
        analysisUrl:
          "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b219ebc4b74543a90234b6511b178a82b901147b.jpg",
        //isCollapsed: true,
        //scaleRatio: 1,
      },
    };
  },

  computed: {
    questionCardJson: function () {
      return JSON.stringify(this.questionCard, null, 2);
    },
  },

  methods: {
    createQuestionCard() {
      console.log(`创建题目元素\r\n${this.questionCardJson}`);
      EasiNoteProxy.Proxy.insertElementByJson(
        "QuestionAnalysisCard",
        this.questionCardJson
      );

      // window.external.InsertElementByJson(
      //   "QuestionAnalysisCard",
      //   this.questionCardJson
      // );
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