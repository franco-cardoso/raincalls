<template>
    <nav>
        <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#specialties">OUR SPECIALTIES</a></li>
            <li><a href="#info">WHY US</a></li>
            <li><a href="#contact">CONTACT US</a></li>
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
    text-shadow: v-bind("scrollPos <= 200 ? '0px 0px 3px black' : '0px 0px 0px black'");
    transition: 1s;
    padding: 5px;
    align-items: center;
    color: v-bind("scrollPos <= 200 ? '#fff' : '#000'");
}

a:hover {
    /* font-size: 17px; */
    text-shadow: v-bind("scrollPos <= 200 ? '0px 0px 3px white' : '0px 0px 1px black'");
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
    }
    
};
</script>
