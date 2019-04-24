import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        turn: 1
    },
    mutations: {
        nextTurn(state) {
            state.turn++;
        }
    }
});