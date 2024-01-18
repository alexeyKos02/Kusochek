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
            'X-RapidAPI-Key': 'ce0d3a5373msh09535187dc18941p1b70ddjsn7bfa4993e597',
            'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
        }
    })
    const response = await axios1
    return response.data
}