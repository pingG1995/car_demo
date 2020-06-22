import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
//引入需要的组件
import Home from "../views/Home.vue";
import InfoPages from "../views/InfoPages.vue";
import ResultPages from "../views/InfoPages.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "InfoPages",
    component: InfoPages
  },
  {
    path: "/result",
    name: "ResultPages",
    component: ResultPages
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
