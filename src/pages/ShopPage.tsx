import React, {useEffect, useState} from 'react';
import ShopCard from "../components/ShopCard";
import {fetchListProducts} from "../HTTPRequests/fetchListProducts";
import {Col, Row} from "react-bootstrap";
import {Item} from "../types/item";

const ShopPage = () => {
    const [items, setItems] = useState<Item[]>([])
    useEffect(() => {
        fetchListProducts().then(data => {
                let array: Item[] = []
                for (let item of data.results) {
                    array.push({name: item.name, image: item.images[0].baseUrl, price:item.price.formattedValue})
                }
                setItems(array)
            }
        )
    }, []);
    return (
        <Row xs={1} md={3} lg={5}>
            {items.map(item => {
                return <Col style={{paddingBottom: "3%", height:"50%"}}>
                    <ShopCard item={item}/>
                </Col>
            })}
        </Row>
    );
};

export default ShopPage;