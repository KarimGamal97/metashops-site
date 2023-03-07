<template>
  <div class="erp">
    <nav-bar></nav-bar>
    <erp-component></erp-component>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ErpComponent from "@/components/ErpComponent.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: "ErpView",
  components: { NavBar, ErpComponent, FooterComp },
};
</script>
