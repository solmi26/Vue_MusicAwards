<template>
  <div>
    <my-header></my-header>
    <!-- <div
      style="width:1320px; margin:0 auto; text-align: right; margin-top:50px;"
    > -->
    <div class="right-box">
      <!--Form 경로로 연결-->
      <!-- <router-link
          active-class="active"
          tag="button"
          class="btn btn-secondary btn-lg"
          :to="{ name: 'Form' }"
        > -->
      <!--초대권 응모 페이지로 이동-->
      <!--Form 경로로 연결(라우터 링크)-->
      <button type="button" class="btn btn-secondary btn-lg" @click="showForm">
        <!--아이콘-->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-tiktok"
          viewBox="0 0 16 16"
        >
          <path
            d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"
          />
        </svg>
        <span>초대권 응모하기</span>
      </button>
      <!-- </router-link> -->
    </div>

    <div class="right-box">
      <button type="button" class="btn btn-secondary btn-lg" v-if="canVote">
        <!--아이콘-->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-ticket-perforated-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5Zm4-1v1h1v-1H4Zm1 3v-1H4v1h1Zm7 0v-1h-1v1h1Zm-1-2h1v-1h-1v1Zm-6 3H4v1h1v-1Zm7 1v-1h-1v1h1Zm-7 1H4v1h1v-1Zm7 1v-1h-1v1h1Zm-8 1v1h1v-1H4Zm7 1h1v-1h-1v1Z"
          />
        </svg>
        보유 투표권: <span class="badge text-bg-dark">{{ votes }}</span>
      </button>
      <!--투표권이 0이 되면 퀴즈를 풀어 추가로 투표권을 얻을 수 있음-->
      <button
        type="button"
        class="btn btn-secondary btn-lg"
        @click="showAddVote"
        v-else
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-ticket-perforated-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5Zm4-1v1h1v-1H4Zm1 3v-1H4v1h1Zm7 0v-1h-1v1h1Zm-1-2h1v-1h-1v1Zm-6 3H4v1h1v-1Zm7 1v-1h-1v1h1Zm-7 1H4v1h1v-1Zm7 1v-1h-1v1h1Zm-8 1v1h1v-1H4Zm7 1h1v-1h-1v1Z"
          />
        </svg>
        투표권 받으러 가기
        <!--투표권이 0이 되면 alert창으로 투표권을 전부 사용했다고 알림-->
        {{ noVote() }}
      </button>
    </div>

    <!-- </div> -->
    <main>
      <!-- <div v-for="candidate in candidates">
            <div class="row">
              <div class="col-md-5 col-md-offset-0">
                <figure>
                  <img class="candidate" v-bind:src="candidate.image" />
                </figure>
              </div>
              <div class="col-md-6 col-md-offset-0 description">
                <h1 v-text="candidate.name"></h1>
                <p v-html="candidate.sing"></p> -->
      <!-- 화면 구성 변경(일렬에서 4개씩 두 줄, img 사이즈 조정, 별 추가(수상확률)) -->
      <!-- <section class="py-5"> -->
      <section>
        <div class="container px-4 px-lg-0 mt-4">
          <div
            class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
          >
            <!-- 오류 해결
              <div
              class="col mb-5"
              v-for="candidate in candidates"
              :key="candidate"
            > -->
            <!--v-for 지시자-->
            <!-- <div
              class="col mb-5"
              v-for="(candidate, index) in candidates"
              :key="index"
            > -->
            <!--득표 순으로 정렬-->
            <div
              class="col mb-5"
              v-for="(candidate, index) in sortedCandidates"
              :key="index"
            >
              <div class="card h-100">
                <!-- image/v-bind 지시문 -->
                <img class="card-img-top" v-bind:src="candidate.image" />
                <!--siner,song/v-text 지시문-->
                <div class="card-body p-4">
                  <div class="text-center mb-2">
                    <h5 class="fw-bolder" v-text="candidate.singer"></h5>
                    <p class="fw-bolder" v-text="candidate.song"></p>
                    <!-- {{ candidate.song }} -->
                    <!--filter-->
                    <h6 class="vote fw-bolder">
                      {{ candidate.vote | formatVote }} 득표
                      <!-- {{ voting(candidate) | formatVote }} 득표 -->
                    </h6>
                  </div>
                  <div
                    class="d-flex justify-content-center small text-warning mb-2"
                  >
                    <h6 class="fw-bolder" style="font-size: large">
                      수상확률:&nbsp;
                    </h6>
                    <!--수상 확률 별점으로 나타내기 prob-active의 바인딩은 checkProb가 결정함-->
                    <div class="rating">
                      <span
                        style="font-size: large"
                        :class="{ 'prob-active': checkProb(candidate.prob, n) }"
                        v-for="(n, index) in 5"
                        :key="index"
                        >☆</span
                      >
                    </div>

                    <!-- <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div> -->
                  </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <!--투표권 차감, 투표한 가수 정보 저장-->
                    <!--v-if/v-else-->
                    <button
                      v-if="canVote"
                      type="button"
                      class="btn btn-dark"
                      @click="[voting(candidate), votes--]"
                    >
                      투표하기
                    </button>
                    <button
                      disabled="true"
                      v-else
                      type="button"
                      class="btn btn-dark"
                      @click="[voting(candidate), votes--]"
                    >
                      투표하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
//헤더, 풋터 불러옴
import MyFooter from "./Footer.vue";
import MyHeader from "./Header.vue";

export default {
  name: "imain",
  //데이터 바인딩
  data() {
    return {
      showMain: true,
      //투표권 개수
      votes: 5,
      voteList: [],
      //수상후보 데이터 추가
      candidates: []
    };
  },
  filters: {
    formatVote(vote) {
      return vote.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  methods: {
    //투표하기 버튼을 누르면 voteList에 가수 속성 값이 추가 되고 alert창이 뜸
    // voting() {
    //   this.voteList.push(this.candidate.singer);
    // }
    voting(aCandidate) {
      const singer = aCandidate.singer;
      this.voteList.push(singer);
      alert(`${singer}에 투표하셨습니다.`);
      return aCandidate.vote++;
      // console.log(aCandidate.vote++);
      // let totalVote = aCandidate.vote + "";
      // totalVote.replace(/,/g, "");
      // totalVote.split(",").join("");
      // this.totalVote++;
      // console.log(this.totalVote);
      //this.aCandidate.vote++;
      // this.votes--;
    },
    showForm() {
      // this.showMain = this.showMain ? false : true;
      //Form 경로로 이동
      this.$router.push({ name: "Form" });
    },
    showAddVote() {
      // this.showMain = this.showMain ? false : true;
      //Form 경로로 이동
      this.$router.push({ name: "AddVote" });
    },
    noVote() {
      alert("투표권을 모두 사용하셨습니다.");
    },
    checkProb(aCandidate, n) {
      return aCandidate - n >= 0;
    }
  },
  computed: {
    // haveVote() {
    //   return this.votes--;
    // }
    //투표권이 0이 되면 false
    canVote() {
      return this.votes > 0;
    },
    //득표 순으로 정렬하는 메소드(득표 많은 순)
    sortedCandidates() {
      if (this.candidates.length > 0) {
        let candidatesArray = this.candidates.slice(0);
        function compare(a, b) {
          if (a.vote > b.vote) return -1;
          if (a.vote < b.vote) return 1;
          return 0;
        }
        return candidatesArray.sort(compare);
      }
    }
  },
  watch: {
    //보유 투표권
    votes(newVotes, oldVotes) {
      console.log(
        "이전 투표권 개수: " + oldVotes + "\n현재 투표권 개수: " + newVotes
      );
    }
  },
  components: { MyHeader, MyFooter },
  //생명주기 훅 추가
  created: function() {
    axios.get("/static/candidates.json").then(response => {
      //candidates.json 파일을 가져옴
      this.candidates = response.data.candidates; //candidates에 응답 데이터 추가
      console.log(this.candidates);
    });
  }
};
</script>
<!--스타일 범위 지정-->
<style scope>
.right-box {
  /* float: right; */
  width: 1320px;
  margin: 0 auto;
  text-align: right;
  margin-right: 350px;
  margin-top: 10px;
}
/* 수상 확률 CSS */
.prob-active:before {
  content: "\2605";
  position: absolute;
  font-size: large;
}
.prob {
  display: inline;
  margin-left: 10px;
  margin-top: 10px;
  float: right;
}
.prob > span {
  display: inline-block;
  position: relative;
  width: 1.1em;
}
</style>
