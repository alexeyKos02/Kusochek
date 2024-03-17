import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
 interface IOrderFormData {
    firstName: string;
    lastName: string;
    city: string;
    address: string;
    phoneNumber: string;
    paymentMethod: 'card' | 'cash';
}
const CheckoutPage: React.FC = () => {
    const [formData, setFormData] = useState<IOrderFormData>({
        firstName: '',
        lastName: '',
        city: '',
        address: '',
        phoneNumber: '',
        paymentMethod: 'card', // значение по умолчанию для способа оплаты
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Реализуйте здесь логику отправки данных на сервер или другой обработчик
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h2>Оформление заказа</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Имя</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                required
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Фамилия</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                required
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Город</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                required
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Адрес</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                required
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Номер телефона</Form.Label>
                            <Form.Control
                                type="tel"
                                name="phoneNumber"
                                required
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <fieldset>
                            <Form.Group>
                                <Form.Label as="legend">Способ оплаты</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Картой курьеру"
                                    name="paymentMethod"
                                    id="paymentCard"
                                    value="card"
                                    checked={formData.paymentMethod === 'card'}
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Наличными курьеру"
                                    name="paymentMethod"
                                    id="paymentCash"
                                    value="cash"
                                    checked={formData.paymentMethod === 'cash'}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </fieldset>

                        <Button variant="primary" type="submit">Оформить заказ</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default CheckoutPage;