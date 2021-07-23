import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/musicians",
    name: "Musicians",
    component: () => import("@/views/Musicians.vue"),
  },
  {
    path: "/musicians/bio",
    name: "Bio",
    component: () => import("@/views/Bio.vue"),
  },
  {
    path: "/add-new-musician",
    name: "AddNewMusician",
    component: () => import("@/views/AddNewMusician.vue"),
  },
  {
    path: "/concerts",
    name: "Concerts",
    component: () => import("@/views/Concerts.vue"),
  },
  {
    path: "/create-event",
    name: "CreateEvent",
    component: () => import("@/views/CreateEvent.vue"),
  },
  {
    path: "/page-not-found-404",
    name: "PageNotFound404",
    component: () => import("@/views/PageNotFound404.vue"),
  },
  {
    path: "/concerts/:id/:slug",
    name: "concert.details",
    component: () => import("@/views/ConcertDetails.vue"),
  },
  {
    path: "/bio/:id/:slug",
    component: () => import("@/views/ConcertDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
