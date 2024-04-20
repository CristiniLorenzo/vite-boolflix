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
        <div class="logo">
            <h1>BOOLFLIX</h1>
        </div>

        <div class="search">
            <input type="text" v-model="store.searchText" placeholder="Cerca una serie TV o un film">

            <button @click="$emit('searchDone')">Cerca</button>
        </div>
        
    </header>
</template>

<style scoped lang="scss">
header{
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .logo{
        color: red;
    }
    .search{
      input{
        padding: 10px;
        margin-right: 10px;
        border-radius: 10px;
      }
      button{
        padding: 10px;
        border-radius: 10px;

      }
    }
}
</style>
