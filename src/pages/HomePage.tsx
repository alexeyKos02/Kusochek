import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/storeHooks";
import {fetchUser, selectUserError, selectUserLoading, selectUser} from "../store/slices/user"
import {Category} from "../types/category";
import CategoryShopCards from "../components/categoryShopCards";
import "../styles/storyStyle.css"
import Carousel from "react-multi-carousel";
import ShopCard from "../components/ShopCard";
import Story from "../components/stories/Story";
import {retry} from "@reduxjs/toolkit/query";

const HomePage = () => {
    const user = useAppSelector(selectUser)
    const loading = useAppSelector(selectUserLoading)
    const error = useAppSelector(selectUserError)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUser(2))
    }, [])

    if (error) {
        return <div>{error}</div>
    }
    if (loading) {
        return <div>Идет загрузка</div>
    }
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 6
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 6
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    const stories = [
        "https://w.forfun.com/fetch/da/daf8eb568fea522f6701fb9c66378cdc.jpeg",
        "https://mobimg.b-cdn.net/v3/fetch/f4/f4e488ef69ea10573c0ce9cfbaf08643.jpeg",
        "https://fikiwiki.com/uploads/posts/2022-02/1644865303_51-fikiwiki-com-p-skachat-kartinki-khoroshego-kachestva-59.jpg",
        "https://w.forfun.com/fetch/da/daf8eb568fea522f6701fb9c66378cdc.jpeg",
        "https://mobimg.b-cdn.net/v3/fetch/f4/f4e488ef69ea10573c0ce9cfbaf08643.jpeg",
        "https://fikiwiki.com/uploads/posts/2022-02/1644865303_51-fikiwiki-com-p-skachat-kartinki-khoroshego-kachestva-59.jpg",
        "https://w.forfun.com/fetch/da/daf8eb568fea522f6701fb9c66378cdc.jpeg",
        "https://mobimg.b-cdn.net/v3/fetch/f4/f4e488ef69ea10573c0ce9cfbaf08643.jpeg",
        "https://fikiwiki.com/uploads/posts/2022-02/1644865303_51-fikiwiki-com-p-skachat-kartinki-khoroshego-kachestva-59.jpg",
        "https://w.forfun.com/fetch/da/daf8eb568fea522f6701fb9c66378cdc.jpeg",
        "https://mobimg.b-cdn.net/v3/fetch/f4/f4e488ef69ea10573c0ce9cfbaf08643.jpeg",
        "https://fikiwiki.com/uploads/posts/2022-02/1644865303_51-fikiwiki-com-p-skachat-kartinki-khoroshego-kachestva-59.jpg",
        "https://w.forfun.com/fetch/da/daf8eb568fea522f6701fb9c66378cdc.jpeg",
        "https://mobimg.b-cdn.net/v3/fetch/f4/f4e488ef69ea10573c0ce9cfbaf08643.jpeg",
        "https://fikiwiki.com/uploads/posts/2022-02/1644865303_51-fikiwiki-com-p-skachat-kartinki-khoroshego-kachestva-59.jpg",
        "https://w.forfun.com/fetch/da/daf8eb568fea522f6701fb9c66378cdc.jpeg",
        "https://mobimg.b-cdn.net/v3/fetch/f4/f4e488ef69ea10573c0ce9cfbaf08643.jpeg",
        "https://fikiwiki.com/uploads/posts/2022-02/1644865303_51-fikiwiki-com-p-skachat-kartinki-khoroshego-kachestva-59.jpg",
        "https://w.forfun.com/fetch/da/daf8eb568fea522f6701fb9c66378cdc.jpeg",
        "https://mobimg.b-cdn.net/v3/fetch/f4/f4e488ef69ea10573c0ce9cfbaf08643.jpeg",
        "https://fikiwiki.com/uploads/posts/2022-02/1644865303_51-fikiwiki-com-p-skachat-kartinki-khoroshego-kachestva-59.jpg",
    ]
    return (
        <div style={{padding: "0 10vw"}}>
            <div>
                {user?.id}
            </div>
            <Carousel responsive={responsive}>
                {stories.map(url => {
                    return <Story url={url}/>
                })}
            </Carousel>

            {/*<div>*/}
            {/*    {Object.keys(Category).map(key => {*/}
            {/*        return <CategoryShopCards key={key} category={Category[key as keyof typeof Category]} nameCategory={key.toString()}/>*/}
            {/*    })}*/}
            {/*</div>*/}
        </div>
    );
};

export default HomePage;