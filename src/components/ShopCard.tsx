import React from 'react';
import {Card} from "react-bootstrap";
import {Item} from "../types/item";
import "../styles/caruselStyle.css"
import CustomLink from "./CustomLink";

interface ShopCardProps {
    item: Item
}

const ShopCard = ({item}: ShopCardProps) => {
    return (
        <CustomLink to={`items/${item.id}`}>
            <Card>
                <div className="img-wrapper">
                    <Card.Img src={item.image.replace("res[m]", "res[x]")}/>
                </div>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </CustomLink>
    );
};

export default ShopCard;