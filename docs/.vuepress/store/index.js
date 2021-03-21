import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const projectConst = require("../project-const.js")

export default new Vuex.Store({
  state:{
      basePath: projectConst.base
  }
})
