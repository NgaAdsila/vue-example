import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store.js";

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
      import(/* webpackChunkName: "detail" */ "../views/TheNavigationDetail"),
    children: [
      {
        path: ":experienceSlug",
        name: "ExperienceDetail",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "experience-detail" */ "../views/ExperienceDetail"
          ),
      }
    ],
    beforeEnter: (to, from, next) => {
      if (store.destinations.some(destination => destination.slug === to.params.slug)) {
        next();
      } else {
        next({ name: 'notFound' });
      }
    }
  },
  {
    path: "*",
    name: "notFound",
    component: () => import(/* webpackChunkName: "not-found" */ "../views/404")
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "vue-router-app-active-class",
  routes
});

export default router;
