<template>
    <section id="info">
        <h1>Why work with Raincalls?</h1>
        <div class="content">
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo et ex a convallis. Suspendisse
                tempor risus non consequat maximus. Aenean maximus elit vitae dui ornare accumsan. Aliquam et fringilla
                neque. Suspendisse quis turpis vitae sem rhoncus consectetur. Mauris finibus vestibulum porta. Mauris
                blandit lorem sagittis dapibus blandit
            </div>
            <div class="img-wrapper">
                <img src="../../assets/reporting.png" alt="">
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    /* margin: 5rem 0; */
    padding: 5rem 0;
    gap: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;
    overflow: visible;
    background-color: white;
}

.content {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    margin: 0 8rem;
    gap: 1rem;
    font-size: 32px;
    color: var(--dark-text);
}



img {
    width: 100%;
    border-radius: 15px;
}

h1 {
    font-size: 60px;
    font-weight: bold;
    color: var(--dark-text);
}
</style>
