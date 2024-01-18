import axios from "axios";

interface ProductListItem {
    category?: string
}

export async function fetchProductListByCategory({category = "men_all"}: ProductListItem = {}) {
    const response = axios.get('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list', {
        method: "get",
        params: {
            country: 'us',
            lang: 'en',
            currentpage: '0',
            pagesize: '10',
            categories: category
        },
        headers: {
            'X-RapidAPI-Key': 'ce0d3a5373msh09535187dc18941p1b70ddjsn7bfa4993e597',
            'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
        }
    })

    return (await response).data
}