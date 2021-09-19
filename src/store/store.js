import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        current_ts: -1,
    },
    mutations: {
        update_current_ts(state, params) {
            state.current_ts = params;
        }
    }
})
    
export default store;
