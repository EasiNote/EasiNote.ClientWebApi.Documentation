import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const projectConst = require("../basePathConst.js")

export default new Vuex.Store({
  state:{
      basePath: projectConst.base
  }
})
