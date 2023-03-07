<template>
  <div class="services">
    <nav-bar></nav-bar>
    <digital-component></digital-component>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import DigitalComponent from "@/components/DigitalComponent.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: "ErpView",
  components: { NavBar, DigitalComponent, FooterComp },
};
</script>
