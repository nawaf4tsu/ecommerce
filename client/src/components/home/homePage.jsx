import './homePage.css'
import NavBar from "../globalElements/navBar/navBar";
import Productpage from "./productSection/productSection";
import SecOne from "./sectionOne/secOne";
import ValueBadge from "./valueProposition/valueBadge";
import '../../main.css'
import '../../bootstrap.css'
import axios from '../../axios'
import { API_KEY_ALL_DATA } from '../../constants/constant'
import { useEffect, useState } from 'react'
import ShoppingCart from '../globalElements/shoppingCart/cart';
import ProductCardLoading from '../globalElements/productCard/productCardLoading';



function HomePage() {

    const [ProDataSend, setProDataSend] = useState()

    useEffect(() => {
        async function mostPopularProData() {
            await axios.get(API_KEY_ALL_DATA).then((response) => {
                
                 setProDataSend(response.data)
            })
        }
        mostPopularProData();
    }, [])
    
    let popularFilteredProducts =  (ProDataSend || []) .filter(item => item.proPosition === 'mostPopular')
    let newArrivals =  (ProDataSend || []) .filter(item => item.proPosition === 'newArrivals')
    
    return (
        <div className="homePage wholeBody container-fluid ">
            <NavBar />
            <SecOne />
            <ValueBadge />
            <Productpage popularProducts={popularFilteredProducts} newArrivals={newArrivals} />
            <ProductCardLoading/>
            <ShoppingCart/>
        </div>
    )

}


export default HomePage