import ProductCard from '../../globalElements/productCard/productCard'
import './productSection.css'

function Productpage(props) {

    return (

        <section className='hmPageProductsSec container'>
            <div className='hmPageProductsSec'>
                <div className='hmMostPopSec'>
                    <div className='hmheadingOfMostPopSec'>
                        <h2>Most Popular Products</h2>
                        <p>Discover the products our customers love most</p>
                    </div>
                    <div className='hmPopProducts'>
                        {
                            props.popularProducts?.map((popularProductsToDis) => (
                                <ProductCard key={popularProductsToDis.id} productToDisplay={popularProductsToDis} />
                            ))
                        }
                    </div>
                </div>
                <div className='hmMostPopSec'>
                    <div className='hmheadingOfMostPopSec'>
                        <h2>Brand New Picks</h2>
                        <p>Fresh drops you don’t want to miss
                            Upgrade your collection with our newest arrivals</p>
                    </div>
                    <div className='hmPopProducts'>
                        {
                            props.newArrivals?.map((popularProductsToDis) => (
                                <ProductCard key={popularProductsToDis.id} productToDisplay={popularProductsToDis} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Productpage