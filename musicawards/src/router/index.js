//폼과 메인, AddVote 컴포넌트를 불러옴
import AddVote from "@/components/AddVote";
import Form from "@/components/Form";
import Main from "@/components/Main";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
  mode: "history", //경로에 해시가 없는 히스토리 모드
  routes: [
    {
      path: "/",
      name: "iMain",
      component: Main,
      props: true
    },
    {
      path: "/form",
      name: "Form",
      component: Form,
      props: true
    },
    {
      path: "/addVote",
      name: "AddVote",
      component: AddVote,
      props: true
    },
    {
      //와일드 카드와 리다이렉션 사용
      //잘못된 주소를 입력해도 메인 경로인 /로 리다이렉트 됨
      path: "*", //모든 경로를 잡음
      redirect: "/" /// /로 재이동
    }
  ]
});
