import React, { useState } from 'react';
import {Button, Col, Container, Image, Row} from 'react-bootstrap';
import CartItemComponent from '../components/cart/cartItemComponent';
import { CartItem } from '../types/cartItemComponent';
import {useNavigate} from "react-router-dom";

const initialItems: CartItem[] = [
    {
        id: 1,
        imageUrl: 'https://mobimg.b-cdn.net/v3/fetch/60/60136e84e7fd3ae2eeb153747c92d786.jpeg',
        name: 'Продукт 1',
        quantity: 2,
        price: 500,
    },
    {
        id: 2,
        imageUrl: 'https://mobimg.b-cdn.net/v3/fetch/60/60136e84e7fd3ae2eeb153747c92d786.jpeg',
        name: 'Продукт 2',
        quantity: 2,
        price: 500,
    },
    {
        id: 3,
        imageUrl: 'https://mobimg.b-cdn.net/v3/fetch/60/60136e84e7fd3ae2eeb153747c92d786.jpeg',
        name: 'Продукт 3',
        quantity: 3,
        price: 1500,
    },
    // Добавьте дополнительные элементы по желанию
];

const CartPage: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>(initialItems);
    const navigate = useNavigate()
    const handleRemove = (id: number) => {
        setCartItems(currentItems => currentItems.filter(item => item.id !== id));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <Container>
            <Image
                onClick={()=>navigate("/account")}
                style={{background: "black", height: "50px", width: "50px", objectFit: "cover", position:"absolute", right:"10vw", cursor:"pointer", transform: "translateX(23%)"}}
                src="https://sneg.top/uploads/posts/2023-06/1687931407_sneg-top-p-prikolnie-avatarki-dlya-malchikov-vkontakt-5.jpg"
                roundedCircle
            />
            <h1>Корзина</h1>
            {cartItems.map(item => (
                <CartItemComponent key={item.id} item={item} onRemove={handleRemove} />
            ))}
            <Row className="my-3 align-items-center">
                <Col xs={2}><div className="text-right mt-3">Всего: {totalPrice}₽</div></Col>
                <Col>
                </Col>
                <Col xs={2}>
                    <Button onClick={()=>navigate("/checkout")}>Оформить заказ</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default CartPage;