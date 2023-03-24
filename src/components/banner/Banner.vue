<template>
    <section id="home">
        <!-- <img src="../../assets/rain.webm" alt=""> -->
        <video autoplay loop muted>
            <source src="../../assets/rain.webm" type="video/webm" />
            Your browser does not support the video tag.
        </video>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    height: 90vh;
    /* height: 100%; */
    background-color: #ffffff;
    display: flex;
    align-items: flex-start;
    z-index: -1;
    overflow-y: hidden;
}

img, video {
    min-height: 100%;
    min-width: 100%;
    filter: brightness(0.8) blur(3px);
    transform: scale(1.1);
    position: absolute;
}

h1 {
    color: #999;
}
</style>
