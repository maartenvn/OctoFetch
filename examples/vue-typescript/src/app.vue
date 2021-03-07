<template>
    <center>
        <!-- Logo -->
        <img src="/img/logo.svg" alt="OctoFetch Logo" style="max-height: 200px" />

        <!-- Title -->
        <h1>OctoFetch - Vue 3 Typescript Demo</h1>

        <p>
            Click the button bellow to fetch the <strong>current BitCoin price</strong> from the
            CoinDesk API.
        </p>

        <button @click="updateCurrentPrice">Fetch BitCoint Price</button>

        <!-- Loading -->
        <template v-if="loading">
            <v-loader />
        </template>

        <!-- Error -->
        <template v-else-if="error">
            <p>Error: {{ error }}</p>
        </template>

        <!-- Data -->
        <template v-else-if="currentPrice">
            <h2>€{{ currentPrice.bpi.EUR.rate }}</h2>

            <div>Last Updated: {{ currentPrice.time.updated }}</div>
        </template>
    </center>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { CurrentPrice } from "@/types/CurrentPrice";
import octofetch from "octofetch";

export default defineComponent({
    name: "App",

    setup() {
        const loading = ref(false);
        const error = ref(null);

        /**
         * Current Price
         */
        const currentPrice: CurrentPrice | null = ref(null);

        /**
         * Fetch the current price of Bitcoin when the user clicks the button
         */
        async function updateCurrentPrice() {
            loading.value = true;

            try {
                currentPrice.value = await octofetch()
                    .baseUrl("https://api.coindesk.com/v1")
                    .get("/bpi/currentprice.json")
                    .fetch();
            } catch (e) {
                error.value = e;
            } finally {
                loading.value = false;
            }
        }

        return {
            loading,
            error,
            currentPrice,
            updateCurrentPrice,
        };
    },
});
</script>
