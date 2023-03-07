import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import DigitalMarketingView from "@/views/DigitalMarketingView.vue";
import ErpView from "@/views/ErpView.vue";
import ContactView from "@/views/ContactView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/digital",
    name: "digital",
    component: DigitalMarketingView,
  },
  {
    path: "/erp",
    name: "erp",
    component: ErpView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
