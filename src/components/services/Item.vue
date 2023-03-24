<template>
    <div class="item-container">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
    </div>
</template>

<style scoped>
h2 {
    font-weight: 500;
    font-size: 18px;
    font-weight: bold;
    color: var(--dark-text);
    
}
.item-container {
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
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
