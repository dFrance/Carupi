import axios from 'axios';

export function ListProducts() {
    const search = fetch('https://api.rawg.io/api/platforms?key=97049885768547438903c8c37654f064')
    console.log(search)
    //GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
    //GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
    return(
        <h1>ListProduct</h1>
    )
}