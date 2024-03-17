// src/RegisterPage.tsx

import React, {useState} from 'react';
import {Form, Button, Container} from 'react-bootstrap';

const RegisterPage: React.FC = () => {
    const [user, setUser] = useState({})
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{paddingTop: "15vh"}}>
            <div className="w-100" style={{maxWidth: "400px"}}>
                <h2 className="text-center mb-4">Регистрация</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="text" placeholder="имя"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSecondName">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control type="text" placeholder="Фамилия"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Телефон</Form.Label>
                        <Form.Control type="number" placeholder="Телефон"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Пароль"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Подтвердите пароль</Form.Label>
                        <Form.Control type="password" placeholder="Подтвердите пароль"/>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Зарегестрироваться
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default RegisterPage;
