import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/detail/:slug",
    name: "TheNavigationDetail",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "detail" */ "../views/TheNavigationDetail"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "vue-router-app-active-class",
  routes
});

export default router;
