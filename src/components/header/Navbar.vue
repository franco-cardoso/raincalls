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
    font-size: 16px;
    transition: 1s;
    padding: 5px;
    align-items: center;
}

button:hover {
    /* font-size: 17px; */
    transform: scale(1.05);
    text-shadow: 0px 0px 1px black;
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
}

</style>

<script>
export default {
    name: "Navbar",
};
</script>
