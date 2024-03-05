import React, {useEffect, useState} from 'react';
import {Form, InputGroup, Offcanvas} from "react-bootstrap";
import "../../../styles/FilterStyle.css"
import {Dropdown, DropdownItemProps} from 'semantic-ui-react'
import {Category} from "../../../types/category";
import 'semantic-ui-css/semantic.min.css'

const Filter = () => {
    const [show, setShow] = useState(false);
    const [categories, setCategories] = useState<{
        key: string;
        text: string;
        value: string;
    }[] | DropdownItemProps[]>([])
    useEffect(() => {
        setCategories(Object.keys(Category).map((category) => {
            return {key: category, text: category, value: category}
        }))
    }, [])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button onClick={handleShow} className="open_filter_button">
                &#9776; Фильтр
            </button>

            <Offcanvas show={show} scroll={true} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Фильтр</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Название</InputGroup.Text>
                        <Form.Control
                            placeholder=""
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Цена</Form.Label>
                        <div style={{display: "inline-flex"}}>
                            <Form.Floating>
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="email"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInputCustom">мин</label>
                            </Form.Floating>
                            <Form.Floating style={{marginLeft: "5px"}}>
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="email"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInputCustom">макс</label>
                            </Form.Floating>
                        </div>
                        <Dropdown className="dropdown_custom" placeholder='Категория' fluid multiple selection
                                  options={categories}/>
                    </Form.Group>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Filter;