import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ComingSoonView from "@/views/ComingSoonView.vue";
import CanadaView from "@/views/CanadaView.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/canada",
        name: "Canada",
        component: CanadaView,
    },
    {
        path: "/usa",
        name: "USA",
        component: ComingSoonView,
    },
    {
        path: "/mexico",
        name: "Mexico",
        component: ComingSoonView,
    },
    {
        path: "/brazil",
        name: "Brazil",
        component: ComingSoonView,
    },
    {
        path: "/argentina",
        name: "Argentina",
        component: ComingSoonView,
    },
    {
        path: "/chile",
        name: "Chile",
        component: ComingSoonView,
    },
    {
        path: "/uk",
        name: "UK",
        component: ComingSoonView,
    },
    {
        path: "/france",
        name: "France",
        component: ComingSoonView,
    },
    {
        path: "/germany",
        name: "Germany",
        component: ComingSoonView,
    },
    {
        path: "/china",
        name: "China",
        component: ComingSoonView,
    },
    {
        path: "/india",
        name: "India",
        component: ComingSoonView,
    },
    {
        path: "/japan",
        name: "Japan",
        component: ComingSoonView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
