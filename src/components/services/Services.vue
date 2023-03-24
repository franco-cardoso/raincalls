<template>
    <section>
        <span style="position: relative; top: -20px; background-color: red" id="specialties"></span>
        <h1>OUR SPECIALTIES</h1>
        <div class="services-grid">
            <div v-for="item in items">
                <Item :title="item.title" :text="item.text"></Item>
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
    margin: 0rem 10rem;
    padding: 3rem 0;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* box-shadow: 0px 10px 50px 15px black; */
    z-index: 1;
    position: relative;
    top: -100px;
    background-color: white;
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
    section {
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
        title: "Rapid Pace",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo et ex a convallis. Suspendisse tempor risus non consequat maximus. Aenean maximus elit vitae dui ornare accumsan. Aliquam et fringilla neque. Suspendisse quis turpis vitae sem rhoncus consectetur. Mauris finibus vestibulum porta. Mauris blandit lorem sagittis dapibus blandit",
    },
    {
        title: "Level of Care",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo et ex a convallis. Suspendisse tempor risus non consequat maximus. Aenean maximus elit vitae dui ornare accumsan. Aliquam et fringilla neque. Suspendisse quis turpis vitae sem rhoncus consectetur. Mauris finibus vestibulum porta. Mauris blandit lorem sagittis dapibus blandit",
    },
];
</script>
