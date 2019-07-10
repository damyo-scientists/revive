// Log successful msg for pixi
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import {store} from './core/Store';
import Game from "./core/Game";
import App from './App';
import "@babel/polyfill";
//import Api from "./utils/Api";
import routes from './routes';
import VueRouter from "vue-router";

Vue.use(VueRouter);
//
// let router = new VueRouter({
//     router
// });
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
// let api = async () => {
//     //let apiRes = await new Api().test();
//     // if (apiRes.status == 200) {
//     //     console.log("api", apiRes.data);
//     // }
// };
//api();

const router = new VueRouter({
    routes
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');