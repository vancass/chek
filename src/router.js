import Vue from "vue";
import Router from "vue-router";
import Main from "./components/Main.vue";
import Question from "./components/Question.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: Main
    },
    {
      path: "/progress/:id",
      name: "question",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: Question
    }
  ]
});
