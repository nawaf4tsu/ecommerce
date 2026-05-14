
function ProductCardLoading() {
  return (
        <div className="proCard">
            <div className='proImgSec'>
                    <div className='proImgSecInner'>
                        
                    </div>
            </div>
            <div className='proDescSec'>
                <div className='proDescSecInner'>
                    <div className='ProNameSec'>
                        <h2 id='ProName'></h2>
                    </div>
                    <div className='reviewAndPriceSec'>
                        <div className='reviewSec'>
                            <i className="fa-solid star fa-star"></i><p></p>
                        </div>
                        <div className='priceSec'>
                            <div>
                                <span id='priceOfPro'></span>
                                <div className='mrpOfPro'></div>
                            </div>
                        </div>
                    </div>
                    <div className='proCardBtnSec'>
                        <a className="proCardBtnView"></a>
                        <button className="proCardBtnAddToCart"></button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductCardLoading