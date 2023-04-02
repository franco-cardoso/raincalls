<template>
    <div class="container">
        <div>
            <h1>404</h1>
            <p>Page not found</p>
        </div>
    </div>

</template>

<style scoped>
    .container {
        width: 100%;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container > div {
        width: 700px;
        height: 300px;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.167);
        margin: 15rem 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }

    h1 {
        font-weight: bold;
        font-size: 50px;
        color: rgb(2, 195, 141);
    }

    p {
        font-size: 30px;
    }
    
</style>