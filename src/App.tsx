import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import ShopPage from "./pages/ShopPage";
import Card from "./components/catalog/shopCards/Card";
import Modal from "./components/Modal";
import "./App.scss"
import RedirectToShopItem from "./components/navigate/RedirectToShopItem";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="items/:id" element={<RedirectToShopItem/>}/>
                    <Route path="info" element={<InfoPage/>}/>
                    <Route path="shop" element={<ShopPage/>}/>
                    <Route path="shop/items/:id" element={<Card/>}></Route>
                    <Route path="shop/items/:id/:id2" element={<RedirectToShopItem/>}></Route>
                </Route>
            </Routes>
            <Modal/>
        </div>
    );
}

export default App;
