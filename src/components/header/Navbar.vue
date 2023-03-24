<template>
    <nav>
        <ul>
            <li><button>HOME</button></li>
            <li><button>SERVICES & BENEFITS</button></li>
            <li><button>WHY US</button></li>
            <li><button>CONTACT US</button></li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: flex-end;
}
button {
    all: unset;
    cursor: pointer;
    font-size: 18px;
    text-shadow: v-bind("scrollPos <= 200 ? '0px 0px 3px black' : '0px 0px 0px black'");
    transition: 1s;
    padding: 5px;
    align-items: center;
    color: v-bind("scrollPos <= 200 ? '#fff' : '#000'");
}

button:hover {
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
