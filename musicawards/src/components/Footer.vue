<template>
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">{{ copyright }}</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "my-footer",
    data() {
      return {
        copyright: "Copyright &copy; SM Music Awards"
      };
    }
  };
  </script>