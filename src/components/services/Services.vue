<template>
    <section>
        <div class="wrapper">
            <span style="position: relative; top: -20px; background-color: red" id="specialties"></span>
            <h1>OUR SPECIALTIES</h1>
            <div class="services-grid">
                <div v-for="item in items">
                    <Item :title="item.title" :text="item.text"></Item>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
h1 {
    font-weight: 600;
    font-size: 42px;
    color: var(--dark-text);
}

section {
    background-color: rgb(255, 255, 255);
    z-index: 3;
    position: relative;
    overflow: visible;
}

.wrapper {
    margin: 0rem 16rem;
    padding: 3rem 0 0;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* box-shadow: 0px 10px 50px 15px black; */
    position: relative;
    top: -100px;
    background-color: rgb(255, 255, 255);
}

.services-grid {
    display: grid;
    /* box-shadow: 0px 10px 50px 15px black; */

    grid-template-columns: 1fr 1fr 1fr;
    /* margin: 0 128px; */
    /* display: flex; */
}

@media (max-width: 1800px) {
    .services-grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 1280px) {
    .wrapper {
        top: 0;
        margin: 0;
    }
}

@media (max-width: 920px) {
    .services-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<script setup>
import Item from "./Item.vue";
const items = [
    {
        title: "Health Insurances",
        text: "We exclusively acquire high-volume, fully compliant traffic through an extensive screening process that has been approved by some of the largest purchasers in the United States, including those in the Medicare, Final Expense, ACA, and many other sectors!",
    },
    {
        title: "Legal & Mass Torts",
        text: "We collaborate with leading companies in the United States that maintain connections to a network of legal professionals in the legal field. Together, we have developed a process that guarantees all leads are unsolicited and originate from high-quality, direct interest opt-ins, where individuals are genuinely interested in exploring their legal options.",
    },
    {
        title: "Solar Customers",
        text: "We excel in identifying the perfect consumer for solar products, taking into account factors such as zip code, income, and historical intent. We make certain that our solar media purchases can seamlessly integrate into any business model, regardless of its size or scope!",
    },
    {
        title: "Other Verticals",
        text: "Our operations span the entire lead generation spectrum. With over a decade of resources and a team of specialists covering the entire market, we can obtain traffic in virtually any domain. Whether your focus is on high volume or a niche product offering, we're here to assist you!",
    },
    {
        title: "Home Services",
        text: "We can cover any and all home service project businesses - From Plumbing, Pest Control, HVAC, Bathroom & Kitchen Remodels and more! We can make it rain calls on any home service business.",
    },
    {
        title: "We care about your campaign",
        text: "Our commitment extends to both our publishers and advertisers alike. Our team will devote their efforts to fine-tuning every aspect of a campaign for optimal results. We provide regular internal reports on performance and share daily quality feedback to ensure that you are always in the loop and prepared.",
    },
];
</script>
