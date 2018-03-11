import axios from 'axios';


export const getData = (fiat) => {

    let endpoint = "https://api.coinmarketcap.com/v1/ticker/?limit=100";

    switch (fiat) {
        case "EUR":
        endpoint = 'https://api.coinmarketcap.com/v1/ticker/?limit=100&convert=EUR';
            break;
        case "CNY":
            endpoint = 'https://api.coinmarketcap.com/v1/ticker/?limit=100&convert=CNY';
            break;
        case "USD":
            endpoint = "https://api.coinmarketcap.com/v1/ticker/?limit=100";
            break;
        default:
            break;
    }


    return (dispatch) => {
        axios.get(endpoint)
        .then((response) => {
            dispatch({
                type: "GET_CURRENCIES",
                data: response.data
            });
        }).catch((err) => {
            console.log(err);
        });
    }
}

export const setFiat = (data) => ({
    type: 'SET_FIAT',
    data
});

export const setCurrency = (data) => ({
    type: 'SET_CURRENCY',
    data
});