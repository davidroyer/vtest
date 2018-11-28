import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import Vuxi from "vuxi";
import VlhForms from "vlh-forms2";
import App from "./App.vue";
import VeeValidate from "vee-validate";
// import "./assets/styles/app.scss";

Vue.use(VeeValidate);
Vue.use(Vuxi);
Vue.use(VlhForms);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
