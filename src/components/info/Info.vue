<template>
    <section id="info">
        <div class="diag"></div>
        <div class="bgdiv"></div>
        <div class="content-wrapper">
            <h1>Why work with Raincalls?</h1>
            <div class="content">
                <div style="color: white">
                    In the competitive world of digital marketing, businesses need partners who can deliver results and
                    drive success. Rain Calls is a team of experienced lead generation and pay-per-call industry
                    veterans with over 10 years of experience in a diverse range of verticals. Our expertise, commitment
                    to excellence, and impressive track record have consistently amazed our clients and helped them
                    achieve their Cost Per Acquisition (CPA) goals. We're not just another marketing agency; we're the
                    partner you need to make it "Rain Calls" on your business.
                </div>
                <div class="img-wrapper">
                    <img src="../../assets/reporting.png" alt="" />
                </div>
            </div>
        </div>
        <div class="diag"></div>
    </section>
</template>

<style scoped>
.diag {
    background-color: rgb(255, 255, 255);
    height: 100px;
    width: 110%;
    z-index: 10;
    position: absolute;
    transform: rotate(2deg);
}

.diag:nth-child(1) {
    top: -80px;
}

.diag:nth-child(4) {
    bottom: -80px;
}

section {
    /* margin: 5rem 0; */
    padding: 8rem 0;
    gap: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    border: solid black;
    position: relative;
    overflow: visible;
    color: white;
    /* background-color: white;
    background-image: url('../../assets/rain.jpg');
    background-size: cover;
    background-repeat: no-repeat; */
}

.content-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: rgba(2, 2, 2, 0.432);
    box-shadow: 0px 0px 20px 20px rgba(2, 2, 2, 0.432);
    padding: 1rem;
    gap: 1rem;
}

.bgdiv {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/rain.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    filter: blur(3px);
    transform: scale(1.1);
}

.content {
    display: flex;
    flex-direction: column;
    /* grid-template-columns: 0.5fr 1fr; */
    margin: 0 8rem;
    gap: 1rem;
    font-size: 26px;
    color: var(--dark-text);
}

.img-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
    width: 65%;
    border-radius: 15px;
    border: solid rgba(0, 0, 0, 0.411)}

h1 {
    font-size: 40px;
    font-weight: bold;
    /* color: var(--dark-text); */
    text-align: center;
}

@media (max-width:1024px) {
    img {
        width: 100%;
    }
}

@media (max-width:920px) {
    .content {
        margin: 0 3rem;
    }
}

@media (max-width:720px) {
    .content {
        margin: 0 1rem;
    }
}
</style>
