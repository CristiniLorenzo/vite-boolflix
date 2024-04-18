<script>
export default {
    name: 'resultCard',
    props: {
        cardInfo: Object
    }
}
</script>

<template>
    <section>
        <h3>Titolo: {{ cardInfo.title }}</h3>
        <div>Titolo originale: {{ cardInfo.original_title }}</div>
        <div>Lingua: {{ cardInfo.original_language }}</div>
        <div>voto: {{ cardInfo.vote_average }}</div>

    </section>
</template>

<style>

</style>