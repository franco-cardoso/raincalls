<script setup>
import Navbar from "./Navbar.vue";
import Logo from "../../assets/logo-no-background.svg";
import { useRoute } from "vue-router";
</script>

<template>
    <div class="header-container" :class="route.path === '/' ? 'hc-dyn' : 'hc-fixed'">
        <div class="logo-wrapper" :class="route.path === '/' ? 'lw-dyn' : 'lw-fixed'">
            <img class="logo" :src="Logo" alt="" />
        </div>
        <div>
            
        </div>
        <Navbar :scrollPos="scrollPos"></Navbar>
    </div>
</template>

<style scoped>
.header-container {
    display: grid;
    /* height: 5rem; */
    position: fixed;
    align-items: center;
    width: 100%;
    transition: 800ms;
    grid-template-columns: 0.5fr 0.4fr 1fr;
}

.hc-dyn {
    top: v-bind("scrollPos <= headerSizeChange ? '-20vh' : '0px' ");
    height: v-bind("scrollPos <= headerSizeChange ? '100vh' : '80px' ");
    /* top: v-bind("scrollPos <= headerSizeChange ? '0' : '-80px' "); */
    padding: v-bind("scrollPos <= headerSizeChange ? '0 2rem' : '0px 3rem' ");
    background-color: v-bind("scrollPos <= headerSizeChange ? '' : 'white' ");
    box-shadow: v-bind("scrollPos <= headerSizeChange ? '' : '0px -35px 50px 10px black'");
}

.hc-fixed {
    top: 0px;
    height: 80px;
    /* top: v-bind("scrollPos <= headerSizeChange ? '0' : '-80px' "); */
    padding: 0px 3rem;
    background-color: white;
    box-shadow: 0px -35px 50px 10px black;
}

/* h1 {
    margin: 25px;
} */

.logo-wrapper {
    transition: 800ms;
    padding: 10px 0;
    margin: 0;
    overflow: hidden;
}

.lw-dyn {
    height: v-bind("scrollPos <= headerSizeChange ? '1000px' : '80px' ");
    width: v-bind("scrollPos <= headerSizeChange ? '1000px' : '250px' ");
}

.lw-fixed {
    height: 80px;
    width: 250px;
}

.logo {
    height: 100%;
    width: 100%;
}

nav {
    display: flex;
    justify-content: center;
}
.header-container div,
.header-container nav {
    display: flex;
    align-items: center;
}

@media (max-width: 1700px) {
    .lw-dyn {
        height: v-bind("scrollPos <= headerSizeChange ? '180%' : '80px' ");
        width: v-bind("scrollPos <= headerSizeChange ? '180%' : '250px' ");
    }
    .lw-fixed {
        height: 80px;
        width: 250px;
    }
}

@media (max-width: 920px) {
    .header-container {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 2fr 0fr 1fr;
        padding: 0;
        align-items: end;
        gap: 2rem;
    }
    .logo-wrapper {
        height: 230px;
        padding: 0 10px;
        width: 100%;
    }

    .lw-dyn {
        height: v-bind("scrollPos <= headerSizeChange ? '230px' : '80px' ");
        width: v-bind("scrollPos <= headerSizeChange ? '100%' : '170px' ");
    }

    .lw-fixed {
        height: 230px;
        width: 100%;
    }


    nav {
        align-self: flex-start;
    }
}

@media (max-width: 720px) {
    .header-container nav {
        display: none;
    }
    .header-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
}
</style>

<script>
export default {
    name: "Header",
    props: {
        scrollPos: Number,
    },
    components: {
        Logo,
        Navbar,
    },
    computed: { route: () => useRoute() },
};

const headerSizeChange = 150;
</script>
