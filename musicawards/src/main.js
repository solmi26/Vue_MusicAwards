// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Vue from "vue";
import App from "./App";
import router from "./router";

require("./assets/styles.css"); //css 추가
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

//전역컴포넌트
Vue.component("my-component", {
  template: `<div></안녕, 전역 컴포턴트로부터</div>`
});

/* 뷰 생성자 */
new Vue({
  el: "#app" /* DOM 마운트 지점을 찾는 데 사용할 CSS 선택자 */,
  router,
  components: { App },
  template: "<App/>"
});
