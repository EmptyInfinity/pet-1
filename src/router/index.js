import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Profile from "../views/logined/Profile.vue";
import Auth from "../views/Auth.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  { path: "/login", name: "Login", component: Auth },
  { path: "/register", name: "Register", alias: "/login", component: Auth },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
