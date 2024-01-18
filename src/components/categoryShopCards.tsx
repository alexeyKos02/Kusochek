import {useEffect, useState} from 'react';
import {Item} from "../types/item";
import ShopCard from "./ShopCard";
import "../styles/caruselStyle.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { fetchProductListByCategory } from '../api';

interface CategoryShopCardsProps {
    category: string,
    nameCategory: string
}

const CategoryShopCards = ({category, nameCategory}: CategoryShopCardsProps) => {
    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        fetchProductListByCategory({category})
            .then(data => {
                const array = data.results.map((item: any) => ({
                    name: item.name,
                    image: item.images[0].url,
                    price: item.price.formattedValue,
                    id: item.allArticleCodes[0]
                }))
                
                setItems(array)
            }
        )
    }, [category]);

    const responsive = {
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

    if (items.length === 0) {
        return null
    }
    
    return (
        <div style={{paddingBottom: "10vh"}}>
            <h2>{nameCategory}</h2>
            <Carousel responsive={responsive}>
                {items.map(obj => (<ShopCard key={obj.id} item={obj}/>))}
            </Carousel>
        </div>
    );
};

export default CategoryShopCards;