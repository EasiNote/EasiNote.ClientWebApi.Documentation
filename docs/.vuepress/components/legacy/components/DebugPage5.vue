<template>
  <div class="grid-content">
    <h3>5 创建题目元素</h3>

    <el-link type="primary" target="_blank" :href="documentUrl">
      相关文档
    </el-link>

    <p>
      题目元素尚在内侧阶段，不建议作为产品 API 使用，如有需要，请使用图片可折叠元素
    </p>

    <h4>创建参数</h4>
    <el-row class="row-bg" :gutter="5">
      <el-col :span="18">
        <div class="grid-content bg-purple-light">
          <el-form
            label-position="right"
            label-width="360px"
            :model="questionCard"
            size="medium"
          >
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

      <el-col :span="6">
        <el-input type="textarea" :rows="18" v-model="questionCardJson">
        </el-input>
      </el-col>
    </el-row>

    <el-button
      style="margin-left: 10em"
      type="primary"
      @click="createQuestionCard"
      >创建题库元素</el-button
    >
  </div>
</template>

<script>
import EasiNoteProxy from "easinote-proxy";

export default {
  name: "DebugPage5",

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
    documentUrl: function() {
      return `${this.$store.state.basePath}apis/direct-api-element/question-analysis-card.html`;
    },
    questionCardJson: function() {
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
