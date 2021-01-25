import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

export const bus = new Vue({
  methods:{
    updateCounter(numTask){
      this.$emit('updateCounter', numTask)
    }
  }
}); //servicio

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
