<script setup>
import Review from "./Review.vue";
</script>

<template>
    <section>
        <h1>RATINGS</h1>
        <div class="reviews-container">
            <Review title="Google" :rating="getRandomRating()" :amount="54"></Review>
            <Review title="Glass Door" :rating="getRandomRating()" :amount="54"></Review>
            <Review title="Indeed" :rating="getRandomRating()" :amount="54"></Review>
            <Review title="Facebook" :rating="getRandomRating()" :amount="54"></Review>
        </div>
    </section>
</template>

<style scoped>
section {
    height: 500px;
    width: 100%;
    background-color: #505050;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 7rem;
}

.reviews-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 6rem;
}

h1 {
    color: var(--dark-text);
    font-size: 50px;
}
</style>

<script>
const getRandomRating = () => (Math.random() * 5).toFixed(1)

</script>
