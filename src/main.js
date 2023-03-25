import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import VueGtag from "vue-gtag";
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Policy from "./views/Policy.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },

    {
        path: "/privacy-policy",
        component: Policy,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const app = createApp(App);
app.use(VueGtag, {
    config: { id: "G-W8MHNPM82N" },
});
app.use(router);
app.mount("#app");
