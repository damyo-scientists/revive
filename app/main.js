// Log successful msg for pixi
import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import {store} from './core/Store';
import Game from "./core/Game";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    store,
    render: h => h(App),
    created: function () {
        new Game(this.$store);
    }
});