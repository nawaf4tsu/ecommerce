import './valueBadge.css'

function ValueBadge(){
    return(
        <div className='valueBadgeBox container'>
            <div className='valueBadgeBoxes'>
                <i className="fa-regular fa-truck"></i>
                <h4>7-Day Replacement Policy</h4>
            </div>
            <div className='valueBadgeBoxes'>
                <i className="fa-solid fa-box-open"></i>
                <h4>Free Shipping Over ₹500</h4>
            </div>
            <div className='valueBadgeBoxes'>
                <i className="fa-solid fa-headset"></i>
                <h4>24/7 Tech Support</h4>
            </div>
            <div className='valueBadgeBoxes'>
                <i className="fa-solid fa-hand-holding-heart"></i>
                <h4>Best Value Assured</h4>
            </div>
        </div>
    )
}

export default ValueBadge