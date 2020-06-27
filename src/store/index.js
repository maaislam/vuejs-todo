import Vue from 'vue'
import Vuex from 'vuex'
import todoManage from './modules/todoManage'

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules:{
        todoManage
    }

    
});