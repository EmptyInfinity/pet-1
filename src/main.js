import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./stylesheets/app.scss";
import vuetify from "./plugins/vuetify"; // path to vuetify export

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
