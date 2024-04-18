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
        <resultCard v-for="movie in store.movies" :key="movie.id" :cardInfo="movie"></resultCard>
    </section>
</template>

<style>

</style>
