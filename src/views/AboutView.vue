<template>
  <div class="about">
    <nav-bar></nav-bar>
    <about-component></about-component>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: "AboutView",
  components: { NavBar, AboutComponent, FooterComp },
};
</script>
