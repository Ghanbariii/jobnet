/** src/router/index.js **/
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: Home,
    },
  ],
});

export default router;
