import './cartProCard.css'

function CartProCard() {
    return (
        <div className="item">
            <div className="item__img item__img--1">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="6" y="8" width="20" height="18" rx="2" stroke="white" strokeWidth="1.5" />
                    <circle cx="12" cy="14" r="3" stroke="white" strokeWidth="1.5" />
                    <path d="M6 22 l6-6 5 5 4-5 5 4" stroke="white" strokeWidth="1.5" fill="none" />
                </svg>
            </div>
            <div className="item__info">
                <div className="item__top">
                    <p className="item__name">Merino Wool Overshirt</p>
                </div>
                <div className="item__bottom">
                    <span className="item__price">$128</span>
                    <div className="qty">
                        <button className="qty__btn">−</button>
                        <span className="qty__val">1</span>
                        <button className="qty__btn">+</button>
                    </div>
                </div>
            </div>
            <svg className="item__remove" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4l10 10M14 4L4 14" />
            </svg>
        </div>



    )
}

export default CartProCard