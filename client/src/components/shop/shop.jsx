import NavBar from "../globalElements/navBar/navBar";
import ProductDisplay from "../globalElements/productDisplay/proDisplay";
import ShopBanner from "../globalElements/shopBanner/shopBanner";
import { API_KEY_ALL_DATA } from '../../constants/constant'
import axios from '../../axios'

import {useState , useEffect} from 'react'
import ShoppingCart from "../globalElements/shoppingCart/cart";

function Shop() {
    const shopName = 'Shop';
    const shortHeading = 'Give All You Need'
    const [products, setProducts] = useState()
    useEffect(() => {
        async function fetchData() {
            await axios.get(API_KEY_ALL_DATA).then((response) => {
                setProducts(response.data)
            })
        }
        fetchData()
        
    }, [])
    return (
        <>
            <NavBar />
            <ShopBanner shopName={shopName} />
            <ProductDisplay productsShop={products} shortHeading={shortHeading} />
            <ShoppingCart/>
        </>
    )
}

export default Shop