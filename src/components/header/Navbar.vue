<script setup>
import { useRoute } from "vue-router";
</script>

<template>
    <nav>
        <ul>
            <li><a :class="route.path === '/' ? 'a-dyn' : 'a-fixed'" href="/#home">HOME</a></li>
            <li><a :class="route.path === '/' ? 'a-dyn' : 'a-fixed'" href="/#specialties">OUR SPECIALTIES</a></li>
            <li><a :class="route.path === '/' ? 'a-dyn' : 'a-fixed'" href="/#info">WHY US</a></li>
            <li><a :class="route.path === '/' ? 'a-dyn' : 'a-fixed'" href="/#contact">CONTACT US</a></li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: flex-end;
}
a {
    all: unset;
    cursor: pointer;
    font-size: 18px;
    transition: 1s;
    padding: 5px;
    align-items: center;
}

.a-dyn {
    text-shadow: v-bind("scrollPos <= 200 ? '0px 0px 3px black' : '0px 0px 0px black'");
    color: v-bind("scrollPos <= 200 ? '#fff' : '#000'");
}
.a-dyn:hover {
    /* font-size: 17px; */
    text-shadow: v-bind("scrollPos <= 200 ? '0px 0px 3px white' : '0px 0px 1px black'");
    transform: scale(1.05);
}

.a-fixed {
    text-shadow: 0px 0px 0px black;
    color: #000;
}

.a-fixed:hover {
    text-shadow: 0px 0px 1px black;
    transform: scale(1.05);
}

ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    gap: 20px;
    width: 100%;
    text-align: center;
}

li {
    display: flex;
    align-items: center;
    overflow: hidden;
}

@media (max-width: 920px) {
    ul {
        justify-content: center;
    }
}
</style>

<script>
export default {
    name: "Navbar",
    props: {
        scrollPos: Number,
    },
    computed: { route: () => useRoute() },
};
</script>
