<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    data(){
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <input type="text" v-model="store.searchText">

        <button @click="$emit('searchDone')">Cerca</button>
    </header>
</template>

<style scoped lang="scss">
header{
    background-color: red;
}
</style>
