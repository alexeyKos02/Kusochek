import React, {useEffect, useState} from 'react';
import {Form, InputGroup, Offcanvas} from "react-bootstrap";
import "../../../styles/FilterStyle.css"
import {Dropdown} from 'semantic-ui-react'
import {Category} from "../../../types/category";
import 'semantic-ui-css/semantic.min.css'
import {useSearchParams} from "react-router-dom";

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const catalogQuery = searchParams.getAll('categories') || ""
    const [show, setShow] = useState(false);

    const [currentCategory, setCurrentCategory] = useState<string[]>(catalogQuery)
    const [categories, setCategories] = useState<{
        key: string;
        text: string;
        value: string;
    }[]>([])


    useEffect(() => {
        setCategories(Object.keys(Category).map((category) => {
            return {key: category, text: category, value: category}
        }))
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeFilterCategory = (value: string[]) => {
        setCurrentCategory(value)
        setSearchParams({categories: value})
    }

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
                        <Dropdown className="dropdown_custom"
                                  placeholder='Категория'
                                  fluid multiple selection
                                  options={categories}
                                  value={currentCategory}
                                  onChange={(e, data) =>
                                      changeFilterCategory(data.value as string[])}
                        />
                    </Form.Group>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Filter;