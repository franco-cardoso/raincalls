<script setup>
import Navbar from "./Navbar.vue";
</script>

<template>
    <div class="header-container">
        <div>
            <h1>LOGO</h1>
        </div>
        <div></div>
        <Navbar></Navbar>
    </div>
</template>

<style scoped>
.header-container {
    display: grid;
    /* height: 5rem; */
    grid-template-columns: 0.5fr 0.5fr 1fr;
    margin: 25px;
}

/* h1 {
    margin: 25px;
} */

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
