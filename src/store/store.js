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
            // console.log('これとこれを結合')
            // console.log(state.MEMO.onchart[0].data)
            // console.log(param)
            // console.log('これとこれを結合')
            state.MEMO.onchart[0].data.push(param)
            // console.log(state.MEMO.onchart[0].data)
        }
    }
})
    
export default store;
