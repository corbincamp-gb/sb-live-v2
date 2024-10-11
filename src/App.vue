<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<script>
  import "./assets/main.css";
  import AppHeader from "./components/AppHeader.vue";
  import AppFooter from "./components/AppFooter.vue";
  export default {
    name: "App",
    components: {
      AppHeader,
      AppFooter
    }
  };
</script>