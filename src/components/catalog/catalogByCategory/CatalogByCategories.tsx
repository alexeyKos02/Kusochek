import React from 'react';
import {Category} from "../../../types/category";
import CategoryShopCards from "./categoryShopCards";

const CatalogByCategories = () => {
    return (
        <div>
            <div>
                {Object.keys(Category).map(key => {
                    return <CategoryShopCards key={key} category={Category[key as keyof typeof Category]}
                                              nameCategory={key.toString()}/>
                })}
            </div>
        </div>
    );
};

export default CatalogByCategories;