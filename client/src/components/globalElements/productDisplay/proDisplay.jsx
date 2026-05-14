import ProductCard from '../productCard/productCard'
import './ProDisplay.css'



function ProductDisplay(props) {
    const productsFromShop = props.productsShop;
    const popularProData = props.popularProData;
    return (
        <div className="productSecHead container">
            <h2 className='productSecHeading'>{props.shortHeading}</h2>
            <div className='filterAndProductSec'>
                <div className='productFilter'>
                    <h2 className='filterHeading'>
                        Refine Your Results
                    </h2>
                    <div className='refineData'>
                        <div className='priceInputs'>
                            <p className='refineDataSide'>Price</p>
                            <div className='priceInputsInner' >
                                <input type="number" name="minPrice" id="minPrice" />
                                <i className="fa-solid fa-arrows-left-right"></i>
                                <input type="number" name="maxPrice" id="maxPrice" />
                            </div>
                        </div>
                        <div className='selectCategory'>
                            <p className='refineDataSide'>Category</p>
                            <label htmlFor="Electronics">
                                <input type="checkbox" className='selectCategoryCheck' name="" id="Electronics" />&nbsp;Electronics
                            </label>
                            <label htmlFor="Toys">
                                <input type="checkbox" className='selectCategoryCheck' name="" id="Toys" />&nbsp;Toys
                            </label>
                            <label htmlFor="skinCares">
                                <input type="checkbox" className='selectCategoryCheck' name="" id="skinCares" />&nbsp;Skin Cares
                            </label>
                            <label htmlFor="mobileAccessories">
                                <input type="checkbox" className='selectCategoryCheck' name="" id="mobileAccessories" />&nbsp;Mobile Accessories
                            </label>
                        </div>
                    </div>
                </div>
                <div className="productSec">
                {/* shop products  */}
                    {
                        productsFromShop?.map((proData)=>(
                            <ProductCard key={proData._id} productToDisplay={proData} />
                        ))
                    }
                {/* most popular products */}
                {
                    popularProData?.map((proData)=>(
                        <ProductCard key={proData._id} productToDisplay={proData} />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay