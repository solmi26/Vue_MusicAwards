<template>
  <div>
    <my-header></my-header>
    <body class="bg-light">
      <div class="container border">
        <main>
          <div class="py-5 text-center">
            <h2 class="fw-bolder">퀴즈 풀고 투표권 5장 더 받자!</h2>
            <br />
            <h4 class="text-center" v-html="quiz"></h4>
          </div>

          <hr />
          <br />
          <!--제출하기 버튼 누르면 main페이지로 이동, 리로드-->
          <div class="col-12" style="padding: 10px">
            <div
              class="input-group has-validation"
              style="padding: 30px; margin-left:300px"
            >
              <answerComponent>
                <label for="mc" slot="mcSlot" style="font-size: xx-large;">{{
                  answer
                }}</label>
              </answerComponent>
              <span>
                <button
                  button
                  type="submit"
                  class="btn btn-primary mb-3 btn-lg"
                  @click="answerAlert"
                  style="margin-left:30px ; margin-top: 5px;"
                >
                  제출하기
                </button>
              </span>
            </div>
            <!--동적 컴포넌트-->
            <!--버튼을 누르면 추가 힌트 보기 가능-->
            <div>
              <button
                button
                class="btn  btn-secondary mb-3 btn-lg"
                @click="hint"
              >
                눌러서 힌트 더 보기
              </button>
              <span
                ><h4><component :is="currentView" /></h4
              ></span>
            </div>
          </div>

          <!--컴포넌트-->
          <!-- <my-component :str="message" inline-template
      ><div>
        <p>inline-template - {{ str }}</p>
      </div></my-component
    > -->
          <!-- <myComponent /> -->
          <!-- <my-component></my-component>
          <my-component></my-component>
          <my-component></my-component> -->
        </main>
      </div>
    </body>
    <my-footer></my-footer>
  </div>
</template>
<!--컴포넌트-->
<!-- <script type="text/x-template" id="my-component">
<p>안녕</p>
</script> -->
<script>
//헤더, 풋터 불러옴
import MyFooter from "./Footer.vue";
import MyHeader from "./Header.vue";

const answerComponent = {
  template: `<div>
      <form>
        <slot></slot>
        <slot name="mcSlot"></slot><input type="text" id="mc" style="margin-left:10px; width:300px;height:50px"/>

      </form>
    </div>`
};

//동적 컴포넌트
const HintComponent1 = {
  template: `<span>NCT</span>`
};

const HintComponent2 = {
  template: `<span>토끼</span>`
};

const HintComponent3 = {
  template: `<span>미성의 코러스</span>`
};

//컴포넌트
// const counter = { counter: 0 };
// const MyComponent = {
//   // template: "#myComponent",
//   // template: `<div>안녕 {{text}}!</div>`,
//   props: { str: { type: String, default: "Hi" } },
//   template:
//     '<div><button @click="counter +=1">{{counter}}</button>{{str}}</div>',
//   data() {
//     return { counter: 0 };
//   }
// };

export default {
  name: "AddVote",
  data() {
    return {
      quiz: "<em>Q.</em> 2022 SM 뮤직 어워드 MC는 누구 일까요?",
      answer: "정답 :",
      currentView: HintComponent1
      // message: "부모 컴포넌트로부터!"
      // message: "test"
    };
  },
  // components: { MyHeader, MyFooter, myComponent: MyComponent },
  components: {
    MyHeader,
    MyFooter,
    answerComponent: answerComponent,
    HintComponent1,
    HintComponent2,
    HintComponent3
  },
  methods: {
    //제출하기 버튼 누르면 main페이지로 이동, 리로드
    answerAlert() {
      alert("정답입니다!");
      this.$router.push({ name: "Main" });
      location.reload();
    },
    hint() {
      if (this.currentView === HintComponent1)
        this.currentView = HintComponent2;
      else
        this.currentView =
          this.currentView === HintComponent2 ? HintComponent3 : HintComponent1;
    }
  }
};
</script>
