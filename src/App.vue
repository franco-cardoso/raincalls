<script setup>
import Banner from "./components/banner/Banner.vue";
import Header from "./components/header/Header.vue";
import Services from "./components/services/Services.vue";
import Info from "./components/info/Info.vue";
import Contact from "./components/contact/Contact.vue";
import Footer from "./components/footer/Footer.vue";
</script>

<template>
    <header>
        <Header></Header>
    </header>

    <main>
        <Banner></Banner>
        <Services></Services>
        <Info></Info>
        <Contact></Contact>
    </main>

    <footer>
        <Footer></Footer>
    </footer>
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: white;
    width: 100%;
    box-shadow: 0px -18px 30px 1px black;
}

footer {
    background-color: rgb(31, 31, 31);
}
</style>
