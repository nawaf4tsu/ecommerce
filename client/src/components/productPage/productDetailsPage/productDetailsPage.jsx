import './productDetailsPage.css'
import ProductDetailsProductImages from './productDetailsProductImages/productDetailsProductImages'


function ProductDetailsPage({productData}) {
    return (
        <div className="productDetailsPage container">
            <div className="productDetailsPageLeft">
                <div className='productDetailsPageLeftInner'>
                    <div className='productDetailsproductImages'>
                        <div className="productDetaiProductImageMain">
                            <img src={productData?productData.proImages[0]:''} alt="" />
                        </div>
                        <div className='productDetailsProducImagesSec'>
                            {
                                productData.proImages?.map(items=>(
                                    <ProductDetailsProductImages images={items}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="productDetailsPageRight">
                <i class="fa-regular heart  productDetailsLikeBtn fa-heart"></i>
                <p className='productDetailsCategoryP'>{productData?productData.category:''}</p>
                <p className='productDetailsProSimpleNameP'>{productData?productData.proSimpleName:''}</p>
                <div className='productDetailsRating'><i className="fa-solid star fa-star"></i> 4.5 (245 Reviews)</div>
                <div className='productDetailsPrice'>₹{productData?productData.proPrice:''} &nbsp;<span>₹{productData?productData.proMrpPrice:''}</span></div>
                <p className='productDetailsProDescription'>{productData?productData.proDescription:''}</p>
                <button className='addToCart'>Add to Cart</button>
                <button className='addToCart'>Buy Now</button>
                
                
            </div>
        </div>
    )
}

export default ProductDetailsPage