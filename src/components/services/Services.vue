<template>
    <section>
        <span style="position: relative; top: -20px; background-color: red;" id="specialties"></span>
        <h1>OUR SPECIALTIES</h1>
        <div class="services-grid" >
            <div v-for="item in items">
                <Item :title="item.title" :text="item.text"></Item>
            </div>
        </div>
    </section>
</template>

<style scoped>
h1 {
    font-weight: 600;
    color: var(--dark-text);
}

section {
    /* margin: 3rem 0; */
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 10px 50px 15px black;
    z-index: 1;
}

.services-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 128px;
}
</style>

<script setup>
import Item from "./Item.vue";
const items = [
    {
        title: "Health",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo et ex a convallis. Suspendisse tempor risus non consequat maximus. Aenean maximus elit vitae dui ornare accumsan. Aliquam et fringilla neque. Suspendisse quis turpis vitae sem rhoncus consectetur. Mauris finibus vestibulum porta. Mauris blandit lorem sagittis dapibus blandit",
    },
    {
        title: "Legal",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo et ex a convallis. Suspendisse tempor risus non consequat maximus. Aenean maximus elit vitae dui ornare accumsan. Aliquam et fringilla neque. Suspendisse quis turpis vitae sem rhoncus consectetur. Mauris finibus vestibulum porta. Mauris blandit lorem sagittis dapibus blandit",
    },
    {
        title: "Solar",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo et ex a convallis. Suspendisse tempor risus non consequat maximus. Aenean maximus elit vitae dui ornare accumsan. Aliquam et fringilla neque. Suspendisse quis turpis vitae sem rhoncus consectetur. Mauris finibus vestibulum porta. Mauris blandit lorem sagittis dapibus blandit",
    },
    {
        title: "Other Verticals",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo et ex a convallis. Suspendisse tempor risus non consequat maximus. Aenean maximus elit vitae dui ornare accumsan. Aliquam et fringilla neque. Suspendisse quis turpis vitae sem rhoncus consectetur. Mauris finibus vestibulum porta. Mauris blandit lorem sagittis dapibus blandit",
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
