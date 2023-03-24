<script setup>
import StarRating from "vue-star-rating";
</script>

<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <div class="stars">
            <star-rating
                :rating="rating"
                :read-only="true"
                :increment="0.01"
                :show-rating="false"
                :rounded-corners="true"
                :star-size="27"
            ></star-rating>
            <span>{{ rating }}</span>
        </div>
        <span>{{ amount }} {{ title }} reviews</span>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    h1 {
        font-weight: 900;
        font-size: 26px;

    }
    .stars {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<script>
export default {
    name: "Review",
    components: {
        StarRating,
    },
    props: {
        title: String,
        rating: Number,
        amount: Number,
    },
};
</script>
