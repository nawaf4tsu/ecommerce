import NavBar from "../globalElements/navBar/navBar";
import ProductDisplay from "../globalElements/productDisplay/proDisplay";
import ShopBanner from "../globalElements/shopBanner/shopBanner";
import { API_KEY_ALL_DATA } from '../../constants/constant'
import axios from "../../axios";
import { useState, useEffect } from 'react'
import ShoppingCart from "../globalElements/shoppingCart/cart";

function MostPopular({ popularProData }) {
    const shopName = 'Fave';
    const shortHeading = 'The Best, All Together'
    const [ProDataSend, setProDataSend] = useState()

    useEffect(() => {
        async function mostPopularProData() {
            await axios.get(API_KEY_ALL_DATA).then((response) => {

                setProDataSend(response.data)
            })
        }
        mostPopularProData();
    }, [])

    let popularFilteredProducts = (ProDataSend || []).filter(item => item.proPosition === 'mostPopular')
    return (
        <>
            <NavBar />
            <ShopBanner shopName={shopName} />
            <ProductDisplay shortHeading={shortHeading} popularProData={popularFilteredProducts} />
            <ShoppingCart />
        </>
    )

}

export default MostPopular