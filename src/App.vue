<script setup>
import Header from "./components/header/Header.vue";
import { RouterView } from "vue-router";
import Footer from "./components/footer/Footer.vue";
import Menu from "./components/menu/Menu.vue";
</script>

<template>
    <header>
        <Header :scrollPos="windowTop"></Header>
    </header>
    
    <main>
        <Menu></Menu>
        <RouterView />
    </main>

    <footer>
        <Footer></Footer>
    </footer>
</template>

<style scoped>
header * {
    /* position: fixed; */
    /* background-color: white; */
    /* width: 100%; */
    display: flex;
    justify-content: center;
    overflow-y: hidden;
    box-shadow: 0px -18px 30px 1px black;
    z-index: 10;
}

footer {
    background-color: rgb(31, 31, 31);
}
</style>

<script>
export default {
    name: "App",
    data() {
        return {
            windowTop: 0,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        onScroll(e) {
            this.windowTop = e.target.documentElement.scrollTop;
        },
    },
    components: { Menu }
};
</script>
