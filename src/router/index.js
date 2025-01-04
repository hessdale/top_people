import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import CanadaView from "@/views/CanadaView.vue";

const routes = [
    { path: "/", name: "Home", component: HomeView },
    { path: "/canada", name: "Canada", component: CanadaView }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
