import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

export const store = new Vuex.Store({
    getters,
    actions,
    mutations,
    state: {
        chapter: 2,
        turn: 2
    },
});