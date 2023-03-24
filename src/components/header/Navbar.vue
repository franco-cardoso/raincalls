<template>
    <nav>
        <ul>
            <li><button>HOME</button></li>
            <li><button>SERVICES & BENEFITS</button></li>
            <li><button>WHY US</button></li>
            <li><button>REVIEWS</button></li>
            <li><button>CONTACT US</button></li>
        </ul>
    </nav>
</template>

<style>
nav {
    display: flex;
    justify-content: center;
}
button {
    all: unset;
    cursor: pointer;
    font-size: 16px;
}

ul {
    display: flex;
    list-style: none;
    gap: 20px;
}
</style>

<script>
export default {
    name: "Navbar",
};
</script>
