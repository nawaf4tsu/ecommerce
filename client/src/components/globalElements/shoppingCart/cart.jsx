import './cart.css'
import CartProCard from './cartProductCard/cartProCard'

function ShoppingCart() {
  return (

    <div className='cartSection' id='cartSection'>
      <div className='cardHeading'>
        <h3>Shopping Cart</h3>
        <button className='closeCartBtn' onClick={() => {
          const cartSection = document.getElementById('cartSection');
          cartSection.classList.remove('cartActive')
        }}><i className="fa-solid fa-xmark"></i></button>
      </div>
      <div className="Hline"><div></div></div>

      <div className='cartedProducts'>
        <CartProCard />
      </div>

      <div className='cartProceed'>
        <div className='subTotal'>
          <div><p>Subtotal</p> <p className='cartAmounts'>1222</p></div>
          <div><p>shipping</p> <p className='cartAmounts'>Free</p></div>
          <div className="fullLine"></div>
        </div>
        <div className='cartTotal'>
          <p className='cartAmounts'>Total Due</p><p className='finalAmount cartAmounts'>$295.65</p>
        </div>
        <div className='cartCheckout '>
          <button className='cartCheckoutBtn'>CHECKOUT SECURELY&nbsp;<i className="fa-solid fa-arrow-right-long"></i></button>
          <button className='cartContinueBtn'>CONTINUE SHOPPING&nbsp;<i className="fa-solid fa-arrow-right-long"></i></button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart