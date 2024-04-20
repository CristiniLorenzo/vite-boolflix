<script>
import { store } from '../store.js';

export default {
    name: 'resultCard',
    props: {
        cardInfo: Object
    },
    data() {
        return {
            store,
            supportedFlag: [
                'it',
                'en',
                'fr',
            ],

        }
    },
    methods: {
        getFlag() {
            let flagImage;

            if (this.cardInfo.original_language === 'en') {
                flagImage = 'gb.png';
            } else if (this.cardInfo.original_language === 'it') {
                flagImage = 'it.png';
            } else if (this.cardInfo.original_language === 'fr') {
                flagImage = 'fr.png';
            }

            // Utilizza gli apici inversi per creare un template string
            return new URL(`../assets/img/${flagImage}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <section class="cards">
        <div >
            <img class="poster" :src="store.imgSizeUrl + cardInfo.poster_path" alt="">
        </div>
        <h3 v-if="cardInfo.title">Titolo: {{ cardInfo.title }}</h3>
        <h3 v-else>{{ cardInfo.name }}</h3>
        <div v-if="cardInfo.original_title">Titolo originale: {{ cardInfo.original_title }}</div>
        <div v-if="cardInfo.original_name">Titolo originale: {{ cardInfo.original_name }}</div>

        <div class="languages">
            <img class="flags" v-if="supportedFlag.includes(cardInfo.original_language)" :src="getFlag()" alt="">
            <span v-else>Lingua: {{ cardInfo.original_language }}</span>
        </div>
        <div>voto: {{ cardInfo.vote_average }}</div>

    </section>
</template>

<style scoped lang="scss">
@use '../style/generics.scss';
.poster{
    width: 200px;
}
.flags{
    width: 20px;
}

</style>