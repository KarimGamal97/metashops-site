<template>
  <div class="contact">
    <nav-bar></nav-bar>
    <contact-comp></contact-comp>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ContactComp from "@/components/ContactComp.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: "ContactView",
  components: { NavBar, ContactComp, FooterComp },
};
</script>
