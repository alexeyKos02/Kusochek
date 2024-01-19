import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import type {CardItem} from "../types/card";
import {Button, Col, Dropdown, Row} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import "../styles/CardStyles.css"

const Card = () => {
    const id = useParams<string>()

    const [product, setProduct] = useState<CardItem>()

    useEffect(() => {
        setProduct({
            name: "Slim Fit Suit Vest",
            description: "Suit vest in woven fabric with shiny woven fabric at back. " +
                "Buttons at front, a chest pocket, welt front pockets, and adjustable tab at back. Lined.",
            price: 10,
            measurements: ["https://lp2.hm.com/hmgoepprod?set=" +
            "source[/42/5f/425f9d7f7446baf769dfdc5fcb88b2cea8d1a547.jpg],origin[dam],category[]," +
            "type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
                "https://lp2.hm.com/hmgoepprod?set=source[/89/92/8992fe812d8492299623787cf40753e7a62aed7d.jpg]," +
                "origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
                "https://lp2.hm.com/hmgoepprod?set=source[/33/d7/33d7459541f26bd19c7d62dc89df363df0a99397.jpg]," +
                "origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]"
            ]
        })
    }, [id]);

    function chooseImage(e: any) {
        for (let i of e.target.parentNode.parentNode.children) {
            console.log(i)
            i.classList.remove("focus")
        }
        e.target.parentNode.classList.add("focus")

    }

    return (
        <>
            <Row>
                <Col>
                    <Row>
                        <Col sm={9}>
                            <Image
                                src="https://image.hm.com/assets/hm/f5/bc/f5bcb84c13b7dafc5374d5226657c94c38ed461d.jpg"/>
                        </Col>
                        <Col sm={3} className="extraImage">
                            <Row xs={1} md={1} className="columnPhotos">
                                <Col className="extraImage" onClick={(e) => chooseImage(e)}>
                                    <Image
                                        src="https://image.hm.com/assets/hm/f5/bc/f5bcb84c13b7dafc5374d5226657c94c38ed461d.jpg"/>
                                </Col>
                                <Col className="extraImage" onClick={(e) => chooseImage(e)}>
                                    <Image
                                        src="https://image.hm.com/assets/hm/f5/bc/f5bcb84c13b7dafc5374d5226657c94c38ed461d.jpg"/>
                                </Col>
                                <Col className="extraImage" onClick={(e) => chooseImage(e)}>
                                    <Image
                                        src="https://image.hm.com/assets/hm/f5/bc/f5bcb84c13b7dafc5374d5226657c94c38ed461d.jpg"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <h2>{product?.name}</h2>
                    <div style={{display: "flex", marginTop: "3vh"}}>
                        <Dropdown className="d-inline mx-2" autoClose="outside"
                                  style={{position: "relative", width: "50%"}}>
                            <Dropdown.Toggle id="dropdown-autoclose-outside" style={{width: "100%", textAlign: "left"}}
                                             className="customizerProduct">
                                Тип начинки
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{width: "100%"}}>
                                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="d-inline mx-2" autoClose="outside"
                                  style={{position: "relative", width: "50%"}}>
                            <Dropdown.Toggle id="dropdown-autoclose-outside" style={{width: "100%", textAlign: "left"}}
                                             className="customizerProduct">
                                Кол-во персон/ вес изделия
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{width: "100%"}}>
                                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div style={{background: "#f4f4f4", padding: "24px", marginTop: "3vh"}}>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <div>
                                <div style={{
                                    fontSize: "14px",
                                    lineHeight: "20px"
                                }}>
                                    Стоимость торта
                                </div>
                                <div style={{
                                    fontSize: "24px",
                                    lineHeight: "34px"
                                }}>
                                    {product?.price + "$"}
                                </div>
                            </div>
                            <Button style={{width: "224px", background: "black", border: "1px solid black"}}>Добавить в
                                корзину</Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <h1>{product?.name}</h1>
        </>
    );
};

export default Card;