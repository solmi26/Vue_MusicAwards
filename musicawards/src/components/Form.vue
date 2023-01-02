<template>
  <div>
    <my-header></my-header>
    <body class="bg-light">
      <div class="container border">
        <main>
          <div class="py-5 text-center">
            <h2 class="fw-bolder">초대권 이벤트 응모</h2>
            <br />
            <h4 class="text-center" v-html="description"></h4>
          </div>
          <hr />
          <br />
          <div class="row g-5 justify-content-center">
            <div class="col-md-7 col-lg-8">
              <h4 class="mb-3">응모 양식을 작성해주세요.</h4>
              <form class="needs-validation" novalidate>
                <div class="row g-3">
                  <div class="col-12">
                    <label for="name" class="form-label">Name</label>
                    <!--v-model 지시자, v-bind 사용-->
                    <!--v-model로 연결한 입력 텍스트/앞뒤 공백제거를 위해 .trim 수식어 사용-->
                    <input
                      v-model.trim="enter.name"
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="name"
                      value=""
                      required
                    />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="phone" class="form-label">Phone</label>
                    <div class="input-group has-validation">
                      <!-- <span class="input-group-text">@</span> -->
                      <input
                        v-model.trim="enter.phone"
                        type="text"
                        class="form-control"
                        id="phone"
                        placeholder="010-1234-5678"
                        required
                      />
                      <div class="invalid-feedback">
                        Your username is required.
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="email" class="form-label">Email</label>
                    <!--.lazy 수식어를 이용하여 on change 이벤트에 동기화-->
                    <input
                      v-model.lazy="enter.email"
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />
                    <div class="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="zip" class="form-label">Zip</label>
                    <!--.number 수식어(앞에 있는 0 제거(우편번호가 0으로 시작하지 않는다 가정))-->
                    <input
                      v-model.number="enter.zip"
                      type="text"
                      class="form-control"
                      id="zip"
                      placeholder="12345"
                      required
                    />
                    <div class="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="address" class="form-label">Address</label>
                    <input
                      v-model.trim="enter.address"
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="도로명 주소를 입력해주세요."
                      required
                    />
                    <div class="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="companion" class="form-label">Companion </label>
                    <!--v-model로 연결한 셀렉트 입력-->
                    <select
                      class="form-select"
                      v-model="enter.companion"
                      id="form-control"
                      required
                    >
                      <option value="" disabled
                        >동반인은 최대 3인까지 가능합니다.</option
                      >
                      <option>1인</option>
                      <option>2인</option>
                      <option>3인</option>
                    </select>
                  </div>

                  <div class="my-3 form-group">
                    <label for="receipt" class="form-label"
                      >Receive a Ticket
                    </label>
                    <!--v-model을 포함한 라디오 버튼-->
                    <div class="form-check">
                      <input
                        :value="enter.post"
                        v-model="enter.receipt"
                        id="post"
                        name="receipt"
                        type="radio"
                        class="form-check-input"
                      />
                      <label class="form-check-label" for="post"
                        >우편으로 수령</label
                      >
                    </div>
                    <div class="form-check">
                      <input
                        :value="enter.mobile"
                        v-model="enter.receipt"
                        id="mobile"
                        name="receipt"
                        type="radio"
                        class="form-check-input"
                        checked
                      />
                      <label class="form-check-label" for="mobile"
                        >모바일로 수령</label
                      >
                    </div>
                    <div class="form-check">
                      <input
                        :value="enter.willCall"
                        v-model="enter.receipt"
                        id="willCall"
                        name="receipt"
                        type="radio"
                        class="form-check-input"
                      />
                      <label class="form-check-label" for="willCall"
                        >현장 수령</label
                      >
                    </div>
                  </div>

                  <div class="form-check">
                    <!--v-model을 포함한 체크박스/값 바인딩-->
                    <input
                      v-model="enter.agree"
                      type="checkbox"
                      class="form-check-input"
                      id="agree"
                      value="true"
                      :true-value="enter.yes"
                      :false-value="enter.no"
                    />
                    <label class="form-check-label" for="agree"
                      >개인정보 수집에 동의하십니까?(당첨자 확인으로만 사용되며
                      3개월 후 폐기됩니다.)</label
                    >
                  </div>
                </div>

                <hr class="my-4" />
                <!--입력 데이터 표시-->
                <h4 class="mb-3">입력 정보 확인</h4>
                이름: <span>{{ enter.name }}</span
                ><br />
                전화번호: <span>{{ enter.phone }}</span
                ><br />
                이메일: <span>{{ enter.email }}</span
                ><br />
                <!-- typeof 연산자
                  우편번호: <span>{{ typeof enter.zip }}</span
                ><br /> -->
                우편번호: <span>{{ enter.zip }}</span
                ><br />
                주소: <span>{{ enter.address }}</span
                ><br />
                동반인: <span>{{ enter.companion }}</span
                ><br />
                티켓 수령 방법: <span>{{ enter.receipt }}</span
                ><br />
                개인정보 수집 동의: <span>{{ enter.agree }}</span
                ><br />
                <hr class="my-4" />
                <br />
                <!--v-on 지시자-->
                <button
                  class="w-100 btn btn-dark btn-lg"
                  type="submit"
                  @click="submitForm"
                >
                  응모 하기
                </button>
              </form>
            </div>
          </div>
        </main>
        <div class="my-5 pt-5"></div>

        <!-- <footer class="my-5 pt-5 text-muted text-center text-small">
          <p class="mb-1">&copy; 2017–2022 Company Name</p>
          <ul class="list-inline">
            <li class="list-inline-item"><a href="#">Privacy</a></li>
            <li class="list-inline-item"><a href="#">Terms</a></li>
            <li class="list-inline-item"><a href="#">Support</a></li>
          </ul>
        </footer> -->
      </div>
    </body>
    <my-footer></my-footer>
  </div>
</template>
<script>
//헤더, 풋터 불러옴
import MyFooter from "./Footer.vue";
import MyHeader from "./Header.vue";

export default {
  name: "Form",
  data() {
    return {
      //vue 인스턴스 데이터 객체 enter
      enter: {
        name: "",
        phone: "",
        email: "",
        zip: "",
        address: "",
        companion: "",
        receipt: "모바일로 수령",
        agree: "비동의",
        yes: "동의",
        no: "비동의",
        post: "우편으로 수령",
        mobile: "모바일로 수령",
        willCall: "현장 수령"
      },
      description:
        "2022.12.31 PM 07:00<br> <i>@고척스카이돔</i><br> 음악을 사랑하는 사람들의 2022년 종착지!!<br>SM 뮤직어워드와 따뜻한 연말을 함께해요."
    };
  },
  components: { MyHeader, MyFooter },
  methods: {
    //제출 완료 alert 창
    submitForm() {
      alert(
        `응모 완료 되었습니다.\n당첨 발표는 12/15일 이후 홈페이지에서 확인해주세요.`
      );
    }
  }
};
</script>
<!--스타일 범위 지정-->
<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>
