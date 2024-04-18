<script>
import { store } from './store.js';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppResults from './components/AppResults.vue';


export default {
    components: {
        AppHeader,
        AppResults,
    },
    data() {
        return {
            store
        };
    },
    methods: {
        getMoviesFromApi() {
        const queryParams = {
            // api_key: 'store.apiKey',
            api_key: store.apiKey,
            query : store.searchText
        };
        
        axios.get('https://api.themoviedb.org/3/search/movie', {
            params: queryParams
        })
        
        .then((response) => {
            console.log(response);
            store.movies = response.data.results;
        }); 
        },
    },
}
</script>

<template>
<AppHeader @searchDone="getMoviesFromApi"></AppHeader>
<main>

    <AppResults></AppResults>

</main>
</template>

<style lang="scss">
@use './style/generics';

</style>
