<script setup>
import StarRating from "vue-star-rating";
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <div class="stars">
            <star-rating
                :rating="rating"
                :read-only="true"
                :increment="0.01"
                :show-rating="false"
                :rounded-corners="true"
                :star-size="30"
                border-color="#000"
            ></star-rating>
            <span>{{ rating }}</span>
        </div>
        <span>{{ amount }} {{ title }} reviews</span>
    </div>
</template>

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
