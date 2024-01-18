import axios from "axios"

export async function fetchProductDetailsById(id: string) {
    const reponse = axios.get('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail', {
        url: '',
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

    return (await reponse).data
}