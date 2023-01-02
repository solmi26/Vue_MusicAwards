<template>
  <div>
    <header class="bg-dark py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder">
            <!--데이터 바인딩-->
            {{ sitename }}
          </h1>
          <!--HTML 지시자-->
          <p class="lead fw-normal text-white-50 mb-0" v-html="description"></p>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "my-header",
  data() {
    return {
      sitename: "SM Music Awards",
      description: "<i>당신의 아티스트에게 투표하세요!</i>"
    };
  }
};
</script>
