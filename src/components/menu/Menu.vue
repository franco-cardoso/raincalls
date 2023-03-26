<template>
    <div class="container">
        <button class="burger-button" @click="toggleMenu">
            <MenuButton></MenuButton>
        </button>
        <div class="menu-wrapper" :class="isMenu && 'show-menu'">
            <SideMenu :toggleMenu="toggleMenu"></SideMenu>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import MenuButton from "./MenuButton.vue";
import SideMenu from "./SideMenu.vue";

const isMenu = ref(false);
const toggleMenu = () => {
    isMenu.value = !isMenu.value;
};
</script>

<style scoped>
.container {
    z-index: 15;
    display: none;
}
.burger-button {
    all: unset;
    position: fixed;
    right: 0;
    cursor: pointer;
    margin: 0 2rem 0 0;
}

.menu-wrapper {
    display: none;
}


.show-menu {
    display: block;
}

@media (max-width: 920px) {
    .container {
        display: block;
    }
}
</style>
