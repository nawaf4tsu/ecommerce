import './productCard.css'

function ProductCard({ productToDisplay }) {

    // console.log("second",popularProducts);


    return (
        <div className="proCard">
            <div className='proImgSec'>
                <a href={`/product/${productToDisplay ? productToDisplay.id : ''}`} className='productLink'>
                    <div className='proImgSecInner'>
                        <img src={productToDisplay ? productToDisplay.proImages[0] : ''} />
                    </div>
                </a>
            </div>
            <div className='proDescSec'>
                <div className='proDescSecInner'>
                    <div className='ProNameSec'>
                        <h2 id='ProName'><a href={`/product/${productToDisplay ? productToDisplay.id : ''}`}>{productToDisplay ? productToDisplay.proSimpleName : ''}</a></h2>
                    </div>
                    <div className='reviewAndPriceSec'>
                        <div className='reviewSec'>
                            <i className="fa-solid star fa-star"></i><p><span>&nbsp;4.5</span> (1.4k)</p>
                        </div>
                        <div className='priceSec'>
                            <div>
                                <span id='priceOfPro'>₹{productToDisplay ? productToDisplay.proPrice : ''}</span>
                                <div className='mrpOfPro'>M.R.P:&nbsp;₹<span id='mrpOfPro'>{productToDisplay ? productToDisplay.proMrpPrice : ''}</span>  </div>
                            </div>
                        </div>
                    </div>
                    <div className='proCardBtnSec'>
                        <a className="proCardBtnView" href={`/product/${productToDisplay ? productToDisplay.id : ''}`}>View Item</a>
                        <button className="proCardBtnAddToCart">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductCard