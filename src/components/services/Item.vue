<template>
    <div class="item-container">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
    </div>
</template>

<style scoped>
h2 {
    font-weight: 500;
    font-size: 20px;
    font-weight: bold;
    color: var(--dark-text);
    margin: 10px 0;
}

p {
    font-size: 18px;
    line-height: 1.4;
}
.item-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem;
    width: 400px;
    height: 400px;
    border: solid rgba(0, 0, 0, 0.521);
    box-shadow: 4px 4px 10px -5px black;
    border-width: 0.1px;
    border-radius: 15px;
    text-align: center;
    margin: 2rem;
}
</style>

<script>
    export default {
        name: "Item",
        props: {
            title: String,
            text: String
        }
    }
</script>
