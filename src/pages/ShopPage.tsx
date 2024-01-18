import React from 'react';
import CategoryShopCards from "../components/categoryShopCards";
import {Category} from "../types/category";

type LogLevelStrings = keyof typeof Category;
const ShopPage = () => {
    return (
        <div>
            {Object.keys(Category).map(key => {
                return <CategoryShopCards key={key} category={Category[key as keyof typeof Category]} nameCategory={key.toString()}/>
            })}
        </div>
    );
};

export default ShopPage;