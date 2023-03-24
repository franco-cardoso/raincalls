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
    
}

p {
    font-size: 18px;
    line-height: 1.4;
}
.item-container {
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
    padding: 20px 40px;
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
