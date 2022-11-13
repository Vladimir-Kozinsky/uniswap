import axios from "axios";

const proxy = axios.create({
    baseURL: "https://api.coinbase.com/v2"
})

const coinsAPI = {
    async getExchangeRates(currency: string) {
        const response = await proxy.get(`/exchange-rates?currency=${currency}`);
        return response;
    },
}

export default coinsAPI