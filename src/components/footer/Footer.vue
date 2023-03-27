<template>
    <section>
        <div>
            <h2>RAINCALLS</h2>

            <div class="f1-content">
                <div>
                    <h3>Email</h3>
                    <a href="mailto: p32nicky@gmail.com">p32nicky@gmail.com</a>
                </div>

                <div>
                    <h3>Phone</h3>
                    <span>321-948-5497</span>
                </div>
            </div>
        </div>

        <div>
            <h2>PRIVACY & TERMS</h2>
            <ul>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/california-privacy-policy">California Privacy Policy</a></li>
                <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                <li><a href="#">Opt-Out / Unsubscribe</a></li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 500px;
    padding: 4rem 20rem;
    color: white;
}

section > div {
    border-right: solid rgba(247, 247, 247, 0.116);
    padding: 0 30px;
    border-width: 0.1px;
}

section > div:first-child {
    border-left: solid rgba(247, 247, 247, 0.116);
    border-width: 0.1px;
}

h2 {
    text-align: center;
    font-size: 20px;
    margin-bottom: 3rem;
}

h3 {
    font-weight: bold;
    font-size: 18px;
    margin: 5px 0;
}

a {
    text-decoration: none;
    color: #00aff2;
}

li {
    margin-bottom: 15px;
}

.f1-content div {
    margin-bottom: 2rem;
}

@media (max-width: 1200px) {
    section {
        padding: 3rem 5rem;
    }
}

@media (max-width: 720px) {
    section {
        padding: 3rem 0;
    }
}
</style>
