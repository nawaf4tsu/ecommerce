import './shopBanner.css'

function ShopBanner(props) {
    return (
        <div className="container-fluid shopBanner">
            <div className="shopBannerInner">
                <div className="shopName">
                    <h2>
                        {props.shopName}
                    </h2>
                </div>
            </div>

        </div>
    )
}

export default ShopBanner