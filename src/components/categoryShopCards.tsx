import {useEffect, useState} from 'react';
import ShopCard from "./ShopCard";
import "../styles/caruselStyle.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { fetchProductListByCategory } from '../api';
import type { ProductItem } from '../types/product';

interface CategoryShopCardsProps {
    category: string
    nameCategory: string
}

const RESPONSIVE_SETTINGS = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 4
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};

const CategoryShopCards = ({category, nameCategory}: CategoryShopCardsProps) => {
    const [products, setProducts] = useState<ProductItem[]>([])

    useEffect(() => {
        fetchProductListByCategory({category})
            .then(data => {
                const responseData = data.results.map((item: any) => ({
                    name: item.name,
                    image: item.images[0].url,
                    price: item.price.formattedValue,
                    id: item.allArticleCodes[0]
                }))
                
                setProducts(responseData)
            }
        )
    }, [category]);

    if (products.length === 0) {
        return null
    }

    return (
        <div style={{paddingBottom: "10vh"}}>
            <h2>{nameCategory}</h2>

            <Carousel responsive={RESPONSIVE_SETTINGS}>
                {products.map(product => (<ShopCard key={product.id} item={product}/>))}
            </Carousel>
        </div>
    );
};

export default CategoryShopCards;