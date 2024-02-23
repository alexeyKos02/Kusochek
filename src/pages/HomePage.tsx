import React, {useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/storeHooks";
import {fetchUser, selectUserError, selectUserLoading, selectUser} from "../store/slices/user"
import "../styles/storyStyle.css"
import Carousel from "react-multi-carousel";
import StoryBlock from "../components/stories/StoryBlock";
import {StoryBlockType} from "../types/storyBlockType";
import StoryPlace from "../components/stories/StoryPlace";

const HomePage = () => {
    const user = useAppSelector(selectUser)
    const loading = useAppSelector(selectUserLoading)
    const error = useAppSelector(selectUserError)
    const dispatch = useAppDispatch()
    const carouselRef = useRef<Carousel | null>(null);

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

    const stories: StoryBlockType[] = [
        {
            preview: "https://w.forfun.com/fetch/da/daf8eb568fea522f6701fb9c66378cdc.jpeg",
            videos: ["https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
                "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4"],
            id: 0
        },
        {
            preview: "https://mobimg.b-cdn.net/v3/fetch/f4/f4e488ef69ea10573c0ce9cfbaf08643.jpeg",
            videos: ["https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4",
                "https://assets.mixkit.co/videos/preview/mixkit-red-frog-on-a-log-1487-large.mp4",
                "https://assets.mixkit.co/videos/preview/mixkit-cold-looking-fashion-woman-in-a-winter-environment-39879-large.mp4"
            ],
            id: 1
        },
        {
            preview: "https://mobimg.b-cdn.net/v3/fetch/f4/f4e488ef69ea10573c0ce9cfbaf08643.jpeg",
            videos: ["https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4",
                "https://assets.mixkit.co/videos/preview/mixkit-red-frog-on-a-log-1487-large.mp4",
                "https://assets.mixkit.co/videos/preview/mixkit-cold-looking-fashion-woman-in-a-winter-environment-39879-large.mp4"
            ],
            id: 2
        }
    ]

    console.log("home")

    const goToSlide = (index: any) => {
        if (carouselRef.current) {
            // Доступ к методам карусели через ref
            (carouselRef.current as any).goToSlide(index);
        }
    };
    return (
        <div style={{padding: "0 10vw"}}>
            <Carousel responsive={responsive}>
                {stories.map(story => {
                    return <StoryBlock blockAction={goToSlide} key={story.id} storyBlock={story}/>
                })}
            </Carousel>
            <StoryPlace carouselRef={carouselRef}/>
            {/*<div>*/}
            {/*    {Object.keys(Category).map(key => {*/}
            {/*        return <CategoryShopCards key={key} category={Category[key as keyof typeof Category]} nameCategory={key.toString()}/>*/}
            {/*    })}*/}
            {/*</div>*/}
        </div>
    );
};

export default HomePage;