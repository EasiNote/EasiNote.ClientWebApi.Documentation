<template>
  <div class="grid-content">
    
    <div id="createPanel">
      <div>
        <h3 style="bottom: 0px">将要执行的语句是</h3>
      </div>

      <el-button style="width: 10em" type="primary" @click="invokeCustomMethod"
        >执行</el-button
      >
    </div>

    <highlightjs language="javascript" :code="resultJsCode2" />

    <h3>方法名</h3>

    <el-row class="row-bg">
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

    <h3>参数</h3>

    <el-row class="row-bg param-row" :gutter="24">
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <el-input
            type="textarea"
            :rows="6"
            v-model="commonMethodParamValue1"
            placeholder="参数值1"
          >
          </el-input>
        </div>
      </el-col>
    </el-row>

    <el-row class="row-bg param-row" :gutter="24">
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <el-input
            type="textarea"
            :rows="6"
            v-model="commonMethodParamValue2"
            placeholder="参数值2"
          >
          </el-input>
        </div>
      </el-col>
    </el-row>

    <el-button
      style="margin: 1em 0em; width: 10em"
      type="primary"
      @click="invokeCustomMethod"
      >执行</el-button
    >
  </div>
</template>

<script>
function isEmpty(obj) {
  if (typeof obj == "undefined" || obj == null || obj == "") {
    return true;
  } else {
    return false;
  }
}

export default {
  name: "DebugPageCustoms",

  data() {
    return {
      commonMethodName: "",
      commonMethodParamName1: "",
      commonMethodParamValue1: "",
      commonMethodParamName2: "",
      commonMethodParamValue2: "",

      methodOptions: [
        {
          value: "InsertElementByJson",
          label: "InsertElementByJson",
        },
        {
          value: "InsertMedia",
          label: "InsertMedia",
        },
      ],
    };
  },

  computed: {
    resultJsCode2: function () {
      let code = `window.external.${this.commonMethodName}()`;
      let param1 = `${this.commonMethodParamValue1}`;
      let param2 = `${this.commonMethodParamValue2}`;

      if (!isEmpty(this.commonMethodParamValue1)) {
        code = `window.external.${this.commonMethodName}("${param1}")`;
      }
      if (!isEmpty(this.commonMethodParamValue2)) {
        code = `window.external.${this.commonMethodName}("${param1}", "${param2}")`;
      }

      return code;
    },
  },

  methods: {
    invokeCustomMethod() {
      console.log(`invokeCustomMethod ${this.commonMethodName}`);

      let code = `window.external.${this.commonMethodName}()`;
      let param1 = `${this.commonMethodParamValue1}`;
      let param2 = `${this.commonMethodParamValue2}`;

      if (!isEmpty(this.commonMethodParamValue1)) {
        code = `window.external.${this.commonMethodName}(param1)`;
      }
      if (!isEmpty(this.commonMethodParamValue2)) {
        code = `window.external.${this.commonMethodName}(param1, param2)`;
      }

      eval(code);

      console.log(`eval:\r\n${code}`);
    },
  },
};
</script>

<style>
.param-row {
  margin-bottom: 1em;
}

#createPanel {
  display: flex;
  justify-content: space-between;
}
</style>
