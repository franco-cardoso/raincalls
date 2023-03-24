<script setup>
import Navbar from "./Navbar.vue";
import Logo from "./Logo.vue";
</script>

<template>
    <div class="header-container">
        <div class="logo-wrapper">
            <Logo></Logo>
        </div>
        <div></div>
        <Navbar></Navbar>
    </div>
</template>

<style scoped>
.header-container {
    display: grid;
    /* height: 5rem; */
    position: fixed;
    height: v-bind("scrollPos <= 300 ? '100vh' : '0px' ");
    transition: 2s;
    grid-template-columns: 0.5fr 0.5fr 1fr;
    /* margin: 25px; */
}

.header-container-scroll {
    transition: 1s;
    position: fixed;
    height: auto;
}

/* h1 {
    margin: 25px;
} */

.logo-wrapper {
    /* margin: 50vh 0; */
    transition: 2s;
    width: v-bind("scrollPos <= 300 ? '' : '256px' ");
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
.header-container div:nth-child(1) {
    margin-left: 30px;
}
</style>

<script>
export default {
    name: "Header",
    props: {
        scrollPos: Number,
    },
};
</script>
