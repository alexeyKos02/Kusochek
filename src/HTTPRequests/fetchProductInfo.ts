import axios from 'axios';

interface fetchListProductsByCategoryProps {
    id: string
}

export async function fetchListProductsByCategory(id: fetchListProductsByCategoryProps) {
    const axios1 = axios({
        method: 'GET',
        url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail',
        params: {
            lang: 'en',
            country: 'us',
            productcode: id
        },
        headers: {
            'X-RapidAPI-Key': '7798744e3cmsh7397100f9a61256p1d0f31jsn3b23b01d1467',
            'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
        }
    })
    const response = await axios1
    return response.data
}