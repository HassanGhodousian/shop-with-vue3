import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/homeView.vue";
import taskView from "../views/taskView.vue";
import productsView from "../views/productsView.vue";
const routes = [
  {
    name: "home",
    path: "/",
    component: HomeView,
  },
  {
    name: "task",
    path: "/task",
    component: taskView,
  },
  {
    name: "products",
    path: "/products",
    component: productsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
