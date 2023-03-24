<template>
    <section id="contact">
        <h1>Are you a publisher or advertiser?</h1>
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
        <div class="buttons">
            <button>Publishers Click Here</button>
            <button>Advertisers Click Here</button>
        </div>
    </section>
</template>

<style scoped>
    section {
        margin: 8rem;
    }

    button {
        all: unset;
        cursor: pointer;
        transition: 1s;
        font-size: 22px;
        background-color: #4658f8;
        padding: 20px;
        color: rgb(235, 235, 235);
        border-radius: 4px;
    }
    
    button:hover {
        background-color: #232c81;
    }

    .buttons {
        display: flex;
        justify-content: center;
        gap: 2rem;
    }

    h1{
        font-size: 130px;
        color: var(--dark-text);
        font-weight:bold;
    }

    h2 {
        margin: 2rem 0;
        color: var(--dark-text);
        font-weight: bold;
        font-size: 32px;
    }
</style>