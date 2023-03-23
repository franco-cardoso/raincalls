<script></script>

<template>
    <div class="header-container">
        <div>
            <h1>LOGO</h1>
        </div>
        <nav>
            <ul>
                <li><button>HOME</button></li>
                <li><button>SERVICES & BENEFITS</button></li>
                <li><button>WHY US</button></li>
                <li><button>REVIEWS</button></li>
                <li><button>CONTACT US</button></li>
            </ul>
        </nav>
        <div></div>
    </div>
</template>

<style scoped>
.header-container {
    display: grid;
    height: 5rem;
    grid-template-columns: 0.5fr 1fr 0.5fr;
}
.header-container div, .header-container nav {
    display: flex;
    align-items: center;
}
.header-container div:nth-child(1) {
}
.header-container div:nth-child(2) {
    background-color: green;
}

button {
    all: unset;
}

ul {
    display: flex;
    list-style: none;
    gap: 20px;
}
</style>
