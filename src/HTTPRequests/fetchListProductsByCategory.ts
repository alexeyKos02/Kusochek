import axios from "axios";

interface fetchListProductsByCategoryProps {
    category?: string,
    count?: number;
}

export async function fetchListProductsByCategory({category = "men_all", count = 10}: fetchListProductsByCategoryProps = {}) {
    const axios1 = axios({
        url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
        method: "get",
        params: {
            country: 'us',
            lang: 'en',
            currentpage: '0',
            pagesize: count,
            categories: category
        },
        headers: {
            'X-RapidAPI-Key': '7798744e3cmsh7397100f9a61256p1d0f31jsn3b23b01d1467',
            'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
        }
    })
    const response = await axios1
    return response.data
}