<script setup>
import { useRoute } from "vue-router";
</script>

<template>
    <section>
        <button @click="toggleMenu">X</button>
        <hr>
        <ul>
            <li><a :class="route.path === '/' ? 'a-dyn' : 'a-fixed'" href="/#home">HOME</a></li>
            <li><a :class="route.path === '/' ? 'a-dyn' : 'a-fixed'" href="/#specialties">OUR SPECIALTIES</a></li>
            <li><a :class="route.path === '/' ? 'a-dyn' : 'a-fixed'" href="/#info">WHY US</a></li>
            <li><a :class="route.path === '/' ? 'a-dyn' : 'a-fixed'" href="/#contact">CONTACT US</a></li>
        </ul>
    </section>
</template>

<style scoped>
section {
    width: 40%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    box-shadow: 15px 0px 30px 0px black;
    position: fixed;
    z-index: 15;
    right: 0;
    animation-name: slideMenu;
    animation-duration: 300ms;
    animation-timing-function: ease-out;
}

button {
    all: unset;
    cursor: pointer;
    padding: 1rem 40px;
    font-size: 26px;
    font-weight: bold;
}

li {
    margin: 2rem 0;
}

a {
    text-decoration: none;
    font-size: 22px;
    color: var(--dark-text);
    font-weight: bold;
}

@keyframes slideMenu {
    from {
        transform: translateX(300px);
        /* right: -300px; */
    }

    to {
        /* right: 0; */
        transform: translateX(0px);
    }
}
</style>

<script>
export default {
    name: "SideMenu",
    props: {
        toggleMenu: Function
    },
    computed: { route: () => useRoute() },
};
</script>
