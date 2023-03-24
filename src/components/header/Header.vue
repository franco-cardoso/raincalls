<script setup>
import Navbar from "./Navbar.vue";
// import Logo from "./Logo.vue";
import Logo from "./logo-no-background.svg";
</script>

<template>
    <div class="header-container">
        <div class="logo-wrapper">
            <!-- <Logo></Logo> -->
            <!-- <Logo class="logo"></Logo> -->
            <img class="logo" :src="Logo" alt="" />
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
    width: 100%;
    transition: 2s;
    grid-template-columns: 0.5fr 0.5fr 1fr;
    height: v-bind("scrollPos <= headerSizeChange ? '100vh' : '80px' ");
    /* top: v-bind("scrollPos <= headerSizeChange ? '0' : '-80px' "); */
    padding: v-bind("scrollPos <= headerSizeChange ? '0 2rem 0 0' : '0px 3rem' ");
    background-color: v-bind("scrollPos <= headerSizeChange ? '' : 'white' ");
    box-shadow: v-bind("scrollPos <= headerSizeChange ? '' : '0px -35px 50px 10px black'");
}

/* h1 {
    margin: 25px;
} */

.logo-wrapper {
    transition: 2s;
    padding: 10px 0;
    height: v-bind("scrollPos <= headerSizeChange ? '1000px' : '80px' ");
    width: v-bind("scrollPos <= headerSizeChange ? '1000px' : '250px' ");
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
.header-container div:nth-child(1) {
    margin-left: 30px;
}

@media (max-width: 1600px) {
    .logo-wrapper {
        height: v-bind("scrollPos <= headerSizeChange ? '100%' : '80px' ");
        width: v-bind("scrollPos <= headerSizeChange ? '700px' : '250px' ");
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
    },
};

const headerSizeChange = 200;
</script>
