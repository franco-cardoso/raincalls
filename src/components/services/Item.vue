<template>
    <div class="item-container">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
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
