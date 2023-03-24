<template>
    <section id="contact">
        <h1>Want to work with us?</h1>
        <h2>Sign up below to work with us.</h2>
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
        margin: 3rem 0 0 0;
        text-align: center;
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
        margin: 2rem 15px;
        color: var(--dark-text);
        font-weight: bold;
        font-size: 32px;
    }

    @media (max-width:980px) {
        h1 {
            font-size: 100px;
        }
    }

    @media (max-width: 720px) {
        h1 {
            font-size: 60px;
        }

        h2 {
            margin: 2rem 0px;
        }

        button {
            font-size: 15px;
        }

        section {
            margin: 1rem;
        }
    }
</style>