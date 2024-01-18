import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import ShopPage from "./pages/ShopPage";
import Card from "./components/Card";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="info" element={<InfoPage/>}/>
                    <Route path="shop" element={<ShopPage/>}/>
                    <Route path="shop/items/:id" element={<Card/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
