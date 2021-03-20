<template>
  <div>
    <h3>1 执行通用回调 InvokeMethod</h3>
    <div style="margin-bottom:1em">
      <el-link
        type="primary"
        target="_blank"
        href="/apis/invoke-api/"
      >
        相关文档
      </el-link>
    </div>

    <el-button-group>
      <el-button type="primary" @click="switchToView(0)">默认</el-button>
      <el-button type="primary" @click="switchToView(1)">插入元素</el-button>
    </el-button-group>

    <div class="grid-content" v-if="invokeType === 0">
      <p>
        window.external.InvokeMethod(JSON.stringify({ "method": "实际方法名",
        "args": JSON.stringify({ "参数1": "值1", "参数2": "值2", "参数3": "值3"
        })}))
      </p>

      <p>将要执行的语句是：{{ resultJsCode }}</p>

      <h4>方法名</h4>
      <el-row class="row-bg">
        <el-col :span="4">
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

      <el-row class="row-bg" :gutter="20" style="margin-bottom: 1em">
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <el-input
              v-model="commonMethodParamName1"
              placeholder="参数名1"
            ></el-input>
          </div>
        </el-col>

        <el-col :span="18">
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

      <el-row class="row-bg" :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <el-input
              v-model="commonMethodParamName2"
              placeholder="参数名2"
            ></el-input>
          </div>
        </el-col>

        <el-col :span="18">
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

      <el-button type="primary" @click="invokeCommonMethod">执行</el-button>
    </div>

    <div class="grid-content" v-if="invokeType === 1">
      <p>
        window.external.InvokeMethod(JSON.stringify({ "method":
        "实际方法名","args": "参数值" )}))
      </p>

      <p>将要执行的语句是：{{ resultJsCode2 }}</p>

      <h4>方法名</h4>
      <el-row class="row-bg">
        <el-col :span="4">
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

      <el-row class="row-bg" :gutter="22" style="margin-bottom: 1em">
        <el-col :span="22">
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
  name: "DebugPage1",

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