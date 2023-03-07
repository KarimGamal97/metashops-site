<template>
  <div class="home">
    <nav-bar></nav-bar>
    <home-component></home-component>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "HomeView",
  components: { NavBar, HomeComponent, FooterComp },
};
</script>
<style scoped></style>
