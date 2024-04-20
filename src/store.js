import {reactive} from "vue";

export const store = reactive({
    movies: [],
    series: [],
    searchText: '',
    apiKey: '8d63eae4a53d7ad28c7117093c0366ed',
    imgSizeUrl: 'http://image.tmdb.org/t/p/w500/'
})