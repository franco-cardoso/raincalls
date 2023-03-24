<script setup>
import Banner from "./components/banner/Banner.vue";
import Header from "./components/header/Header.vue";
import Services from "./components/services/Services.vue"
import Reviews from "./components/reviews/Reviews.vue";
</script>

<template>
    <header>
        <Header></Header>
    </header>

    <main>
        <Banner></Banner>
        <Services></Services>
        <Reviews></Reviews>
    </main>
</template>

<style scoped></style>
