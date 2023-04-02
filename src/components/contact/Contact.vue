<template>
    <section id="contact">
        <h1>Want to work with us?</h1>
        <h2>Let's Chat - We'd love to hear from you.</h2>
        <div class="buttons">
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf0xfHubkmma5Y5GcM1txGJU5YwITI39UNnIb_nIZsNkslIEA/viewform?usp=sf_link"
                target="_blank"
                @click="publisherButton"
                >Publishers Click Here</a
            >
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfZor1BuSEY2VHIZEn7vikYVxpZQ986VwGqWuJbVORa7VeECA/viewform?usp=sf_link"
                target="_blank"
                @click="advertisersButton"
                >Advertisers Click Here</a
            >
        </div>
    </section>
</template>

<script>
export default {
    name: "Contact",
    methods: {
        publisherButton() {
            this.$gtag.event("publishers-button", {
                event_category: "forms",
                event_label: "'Publishers click here' button clicked",
                value: 1,
            });
        },
        advertisersButton() {
            this.$gtag.event("advertisers-button", {
                event_category: "forms",
                event_label: "'Advertisers click here' button clicked",
                value: 1,
            });
        },
    },
};
</script>

<style scoped>
section {
    padding: 3rem 0 8rem;
    text-align: center;
    z-index: 3;
    background-color: rgb(255, 255, 255);
}

a {
    all: unset;
    cursor: pointer;
    transition: 1s;
    font-size: 22px;
    background-color: #339671;
    padding: 20px;
    color: rgb(235, 235, 235);
    border-radius: 4px;
    margin: 3rem 0 0 0;
    text-align: center;
}

a:hover {
    background-color: #2ab482;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

h1 {
    font-size: 130px;
    color: var(--dark-text);
    font-weight: bold;
}

h2 {
    margin: 2rem 15px;
    color: var(--dark-text);
    font-weight: bold;
    font-size: 32px;
}

@media (max-width: 980px) {
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
}
</style>
