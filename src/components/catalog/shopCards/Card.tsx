import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ItemCard} from "../../../types/ItemCard";
import {Col, Dropdown, Row} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import "../../../styles/CardPageStyles.css"
import InfoAboutProduct from "./InfoAboutProduct";
import Recommendation from "../Recommendation";
import "../../../styles/ButtonStyle.css"
import {useMediaQuery} from "react-responsive";
const Card = () => {
    var windowWidth = window.innerWidth;
    console.log(windowWidth)
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isFullScreen = useMediaQuery({query: '(min-width: 1643px)'})
    const isHalfScreen = useMediaQuery({query: '(min-width: 800px)'})
    const isSmallWindowComputer = useMediaQuery({query: '(min-width: 992px)'})
    const isBigScreen = useMediaQuery({query: '(min-width: 1824px)'})
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})
    const isPortrait = useMediaQuery({query: '(orientation: portrait)'})
    const isRetina = useMediaQuery({query: '(min-resolution: 2dppx)'})
    console.log("ad")
    const [mainImage, setMainImage] = useState<string>("https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F78%2Fba%2F78ba18ad82ffc28bb283f42a01c3f84af15adfd8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D")
    const id = useParams<string>()
    const [product, setProduct] = useState<ItemCard>()
    useEffect(() => {
        setProduct({
            name: "Slim Fit Suit Vest",
            description: "Suit vest in woven fabric with shiny woven fabric at back. " +
                "Buttons at front, a chest pocket, welt front pockets, and adjustable tab at back. Lined.",
            price: 10,
            composition: "100 хлопок",
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
        console.log(e.target.parentNode)
        for (let i of e.target.parentNode.parentNode.children) {
            i.classList.remove("focus")
        }
        e.target.parentNode.classList.add("focus")
        setMainImage(e.target.src)
    }

    return (
        <>
            <Row>
                <Col style={{display: "flex", maxHeight: `${
                        isFullScreen?"80vh":
                    isDesktopOrLaptop?"60vh":
                        isSmallWindowComputer?"50vh"
                            :isHalfScreen?"40vh":"40vh"}`}}>
                    <div  style={{maxWidth: "75%"}}>
                        <Image
                            src={mainImage}></Image>
                    </div>
                    <div style={{width: "25%"}} className="columnPhotos">
                        <div>
                            <div className="extraImage" onClick={(e) => chooseImage(e)}>
                                <Image
                                    src="https://image.hm.com/assets/hm/83/e9/83e9fd280f18eb8d687ee3a66cd9b146103cd5ff.jpg"/>
                            </div>
                            <div className="extraImage" onClick={(e) => chooseImage(e)}>
                                <Image
                                    src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F78%2Fba%2F78ba18ad82ffc28bb283f42a01c3f84af15adfd8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"/>
                            </div>
                            <div className="extraImage" onClick={(e) => chooseImage(e)}>
                                <Image
                                    src="https://image.hm.com/assets/hm/c6/b4/c6b4d03e0b105c77ef2cd4330ac46a4267c7ce55.jpg"/>
                            </div>
                            <div className="extraImage" onClick={(e) => chooseImage(e)}>
                                <Image
                                    src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F78%2Fba%2F78ba18ad82ffc28bb283f42a01c3f84af15adfd8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"/>
                            </div>
                        </div>
                    </div>
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
                            <div className="containerSpecialButton">
                                <div className="bottom"></div>
                                <div className="cover cut"></div>
                                <div className="text-container">
                                    <div className="text text-dark">Купить</div>
                                </div>
                                <div className="text-container cut">
                                    <div className="text">Купить</div>
                                </div>
                                <div className="overlay"></div>
                            </div>
                            {/*<Button style={{width: "224px", background: "black", border: "1px solid black"}}>Добавить в*/}
                            {/*    корзину</Button>*/}
                        </div>
                    </div>
                    <div style={{marginTop: "5vh"}}>
                        <InfoAboutProduct composition={product?.composition} description={product?.description}
                                          className="info"/>
                    </div>
                </Col>
            </Row>
            <div style={{marginTop: "15vh"}}>
                <Recommendation/>
            </div>
        </>
    );
};


export default Card;