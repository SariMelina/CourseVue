import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from 'vue-resource'

Vue.config.productionTip = false;

Vue.use(VueResource)

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
