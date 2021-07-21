import axios from 'axios';

export const apiList = axios.create({
    baseURL: 'https://api.rawg.io/api/games?key=97049885768547438903c8c37654f064&dates=2019-09-01,2019-09-30&platforms=18,1,7',
})

export const apiDetails = axios.create({
    baseURL: 'https://api.rawg.io/api/games'
})