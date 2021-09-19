import Vue from "vue";
import Vuex from "vuex";
import MEMO from '@/../../src/overlays/MEMO/data.json'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        current_ts: -1,
        MEMO: MEMO,
    },
    mutations: {
        update_current_ts(state, params) {
            state.current_ts = params;
        },
        update_MEMO(state, param) {
            console.log(param)
        }
    }
})
    
export default store;
