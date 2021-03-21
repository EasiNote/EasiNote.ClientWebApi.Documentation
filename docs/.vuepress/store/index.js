import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import projectConst from '../project-const'

export default new Vuex.Store({
  state:{
      basePath: projectConst.base
  }
})
