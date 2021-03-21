<template>
  <div>
    <el-button-group style="margin-bottom: 1em">
      <el-button type="primary" @click="switchToView(0)">默认 API</el-button>
      <el-button type="primary" @click="switchToView(1)"
        >插入元素 API</el-button
      >
    </el-button-group>

    <div class="grid-content" v-if="invokeType === 0">
      <div id="createPanel">
        <h3>将要执行的语句是</h3>
        <el-button
          type="primary"
          style="width: 10em"
          @click="invokeCommonMethod"
          >执行</el-button
        >
      </div>

      <highlightjs language="javascript" :code="resultJsCode" />

      <h4>方法名</h4>
      <el-row class="row-bg" :gutter="24">
        <el-col :span="24">
          <div class="grid-content bg-purple-light">
            <el-select
              v-model="commonMethodName"
              filterable
              allow-create
              default-first-option
              placeholder="请选择或输入方法名"
            >
              <el-option
                v-for="item in methodOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>

      <h4>参数</h4>

      <el-row class="row-bg" :gutter="24" style="margin-bottom: 1em">
        <el-col :span="20">
          <div class="grid-content bg-purple-light">
            <el-input
              v-model="commonMethodParamName1"
              placeholder="参数名1"
            ></el-input>
          </div>
        </el-col>
      </el-row>

      <el-row class="row-bg" :gutter="24" style="margin-bottom: 1em">
        <el-col :span="24">
          <div class="grid-content bg-purple-light">
            <el-input
              type="textarea"
              :rows="4"
              v-model="commonMethodParamValue1"
              placeholder="参数值1"
            >
            </el-input>
          </div>
        </el-col>
      </el-row>

      <el-row class="row-bg" :gutter="24" style="margin-bottom: 1em">
        <el-col :span="20">
          <div class="grid-content bg-purple-light">
            <el-input
              v-model="commonMethodParamName2"
              placeholder="参数名2"
            ></el-input>
          </div>
        </el-col>
      </el-row>

      <el-row class="row-bg" :gutter="24">
        <el-col :span="24">
          <div class="grid-content bg-purple-light">
            <el-input
              type="textarea"
              :rows="4"
              v-model="commonMethodParamValue2"
              placeholder="参数值2"
            >
            </el-input>
          </div>
        </el-col>
      </el-row>

      <el-button
        type="primary"
        style="margin-top: 1em; width: 10em"
        @click="invokeCommonMethod"
        >执行</el-button
      >
    </div>

    <div class="grid-content" v-if="invokeType === 1">
      <p>将要执行的语句是:</p>
      <highlightjs language="javascript" :code="resultJsCode2" />

      <h4>方法名</h4>
      <el-row class="row-bg" :gutter="24">
        <el-col :span="24">
          <div class="grid-content bg-purple-light">
            <el-select
              v-model="commonMethodName"
              filterable
              allow-create
              default-first-option
              placeholder="请选择或输入方法名"
            >
              <el-option
                v-for="item in methodOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>

      <h4>参数</h4>

      <el-row class="row-bg" :gutter="24" style="margin-bottom: 1em">
        <el-col :span="24">
          <div class="grid-content bg-purple-light">
            <el-input
              type="textarea"
              :rows="8"
              v-model="commonMethodParamValue1"
              placeholder="参数值"
            >
            </el-input>
          </div>
        </el-col>
      </el-row>

      <el-button type="primary" @click="invokeCommonMethod2">执行</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DebugPageInvoke",

  data() {
    return {
      invokeType: 0,
      commonMethodName: "",
      commonMethodParamName1: "",
      commonMethodParamValue1: "",
      commonMethodParamName2: "",
      commonMethodParamValue2: "",

      methodOptions: [
        {
          value: "InsertElement",
          label: "InsertElement",
        },
        {
          value: "InsertMedia",
          label: "InsertMedia",
        },
      ],
    };
  },

  computed: {
    resultJsCode: function () {
      return `window.external.InvokeMethod("${this.commonInvokeMethodJson}")`;
    },

    resultJsCode2: function () {
      return `window.external.InvokeMethod("${this.commonInvokeMethodJson2}")`;
    },

    commonInvokeMethodJson: function () {
      let methodName = this.commonMethodName;
      let pn1 = this.commonMethodParamName1;
      let pn2 = this.commonMethodParamName2;
      let p1 = this.commonMethodParamValue1;
      let p2 = this.commonMethodParamValue2;

      let params = {};
      params[pn1] = p1;
      params[pn2] = p2;

      return JSON.stringify({
        method: methodName,
        args: params,
      });
    },

    commonInvokeMethodJson2: function () {
      let methodName = this.commonMethodName;
      let param = this.commonMethodParamValue1;

      return JSON.stringify({
        method: methodName,
        args: param,
      });
    },
  },

  methods: {
    invokeCommonMethod() {
      console.log(`InvokeMethod\r\n${this.commonInvokeMethodJson}`);
      window.external.InvokeMethod(this.commonInvokeMethodJson);
    },
    invokeCommonMethod2() {
      console.log(`InvokeMethod\r\n${this.commonInvokeMethodJson2}`);
      window.external.InvokeMethod(this.commonInvokeMethodJson2);
    },
    switchToView(index) {
      this.invokeType = index;
    },
  },
};
</script>

<style scoped>
#createPanel {
  display: flex;
  justify-content: space-between;
}
</style>