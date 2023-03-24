<template>
    <section>
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
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    overflow-y: hidden;
}

img, video {
    width: 100%;
    /* height: 100%; */
    filter: brightness(0.8) blur(5px);
}

h1 {
    color: #999;
}
</style>
