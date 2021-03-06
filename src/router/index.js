import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import { getMusician, getConcert } from "@/firebase.js";

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
    path: "/concerts",
    name: "Concerts",
    component: () => import("@/views/Concerts.vue"),
  },
  {
    path: "/add-new-event",
    name: "AddNewEvent",
    component: () => import("@/views/AddNewEvent.vue"),
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
    beforeEnter(to, from) {
      //navigation gaurd to check if page exists
      const exists = getConcert(to.params.id);
      if (!exists)
        return {
          name: "NotFound",
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
    },
  },
  {
    path: "/musicians/:id/:slug",
    name: "musician.bio",
    component: () => import("@/views/MusicianBio.vue"),
    beforeEnter(to, from) {
      //navigation gaurd to check if page exists
      const exists = getMusician(to.params.id);
      if (!exists)
        return {
          name: "NotFound",
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/PageNotFound404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    //scroll to top on page changes
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0 }), 1200);
      })
    );
  },
});

export default router;
