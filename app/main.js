// Log successful msg for pixi
import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import {store} from './core/Store';
import Game from "./core/Game";
import Api from "./utils/Api";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
let api = async () => {
  let apiRes = await new Api().test();
  if (apiRes.status == 200) {
    console.log("api", apiRes.data);
  }
};
api();


new Vue({
  el: '#app',
  store,
  render: h => h(App),
  created: function () {
    new Game(this.$store);
  }
});