// زمانی که یم api مقداریش ثابت هست و ما بعدا ممکنه چندین درخواست داشته باشیم یک سری مقدار اولیه رو ثابت تعریف میکنیم
const BASE_URL="https://api.coingecko.com/api/v3";
const API_KEY="CG-UTdekwQJQJQ2vMC5Du8hVKbE";

function getCoinList(page,currency){
    return `${BASE_URL}/coins/markets?vs_currency=${currency}&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&order=market_cap_desc&per_page=20&page=${page}&locale=en`;
}

function searchCoin(query){
    return `${BASE_URL}/search?query=${query}`
}

function marketChart(coin) {
    return `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`
}

export  {getCoinList,searchCoin,marketChart};