import Vue from 'vue'

export default class turn {
    constructor() {
        this.currentTurn = 2;
    }

    static getInstance() {
        if (typeof this.instance == "undefined") {
            this.instance = new turn();
            this.instance.co1nstructor = null;
        }
        return this.instance;
    }

    nextTurn() {
        // go next turn
        let turn = Vue.$store.getters['turn'];
        Vue.store.commit('turn', turn + 1);
        console.log("next turn");
        console.log(this.currentTurn)
    }
}