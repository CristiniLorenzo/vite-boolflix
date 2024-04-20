<script>
import { store } from '../store.js';
import resultCard from './resultCard.vue';

export default {
    name: 'AppResults',
    data() {
        return {
            store
        };
    },
    components: {
        resultCard
    }
}
</script>

<template>
    <section class="app-results">
        <div>
            <h2>FILMS</h2>
            <resultCard v-for="movie in store.movies" :key="movie.id" :cardInfo="movie"></resultCard>
        </div>
        <div>
            <h2>SERIE TV</h2>
            <resultCard v-for="serie in store.series" :key="serie.id" :cardInfo="serie"></resultCard>
        </div>
    </section>
</template>

<style>

</style>
