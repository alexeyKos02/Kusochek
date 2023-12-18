import React from 'react';
import {Card} from "react-bootstrap";
import {Item} from "../types/item";

interface ShopCardProps {
    item: Item
}

const ShopCard = ({item}: ShopCardProps) => {
    return (
        <Card style={{height: "25rem"}}>
            <Card.Img variant="top" src={item.image} style={{objectFit:"cover", height:"75%"}}/>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ShopCard;