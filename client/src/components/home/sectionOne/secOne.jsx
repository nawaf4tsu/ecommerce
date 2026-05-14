import './secOne.css'

function SecOne() {

    return (
        <section className='container-fluid secOne'>
            <div className='container secOne-a'>
                <div className="parent">
                    <div className="secOneBlockOne secOneBlocks">
                        <div className="secOneBlockOneInner">
                            <div className="secOneBlockOneLeft">
                                <div className='shortHighlight'>
                                    <i className="fa-solid fa-layer-group"></i>
                                    <p id='shortHighlightTxt'> shortHighlight</p>
                                </div>
                                <div className='headingAndRankSec'>
                                    <div className='secOneBlockOneHeadingSec'>
                                        <h3 id='secOneBlockOneHeading'>
                                            sequoia Inspiring musico
                                        </h3>
                                    </div>
                                    <div className='rankSec'>
                                        <div className="rankSecInner">
                                            <p id='rankOfproduct'>01</p>
                                            <div className='arrow'><div className='arrowLine'></div><div><i className="fa-solid fa-angle-right"></i></div></div>
                                            <div className='rankSecHeadDescSec'>
                                                <h4>clearSound</h4>
                                                <p>making Your Dream Music Come True Stay with My sounds</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='secOneBlockOneShopBtnSec'>
                                        <button>View All Products <i className=" rotateArrow fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="secOneBlockOneRight">
                                <div className='secOneBlockOneRightInner'>
                                    <img src="src/assets/images/headPhone.png" alt="" />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className=" secOneBlockTwo secOneBlocks">
                        <div className='secOneBlockPopularSec'>
                            <div className='secOneBlockPopularSecBody'>
                                <div className='secOneBlockPopularSecLeft'>
                                    <div className="highLights">
                                        💖Popular
                                    </div>
                                    <div className='popularHeading'>
                                        <h4>Listening Has Been Released</h4>
                                    </div>
                                    <div className='popularShortGallery'>
                                        <div className='shortGalleryImgs'><img src="src/assets/images/headPhoneWhite.jpg" alt="" /></div>
                                        <div className='shortGalleryImgs popularSp'><img src="src/assets/images/manWithHeadphone.png" alt="" /></div>
                                        <div className='shortGalleryImgs'><img src="src/assets/images/headPhoneBox.jpg" alt="" /></div>
                                    </div>
                                </div>
                                <div className='secOneBlockPopularSecRight'>
                                    <a href="#"><i className="roedArrow rotateArrow fa-solid fa-arrow-right"></i></a>
                                    <img src="src/assets/images/woman-wears-headphones-with-one-hand-up-smiling.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" secOneBlockThree secOneBlocks">
                        <div className='secOneBlockThreeCategory'>
                            <div className='secOneBlockThreeCategoryLeft'>
                                <h4>Find Products by Category</h4>
                                <div className='blockCategoryGallery'>
                                    <div className='categoriesBlock categoryImageA'></div>
                                    <div className='categoriesBlock categoryImageB '></div>
                                    <div className='categoriesBlock categoryImageC'></div>
                                </div>
                            </div>
                            <div className='secOneBlockThreeCategoryRight'>
                                <button onClick={() => { alert("waitWindowIsOpening") }} className='categoryBtn'>
                                    <div className='categoryBlockImages'></div>
                                    <div className='categoryBlockImages'></div>
                                    <div className='categoryBlockImages'></div>
                                    <div className='categoryBlockCategoryLeangth'></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" secOneBlockFour secOneBlocks">
                        <div className='secOneBlockFourMostRated'>
                            <div className='secOneBlockFourMostRatedImageSec'>
                                <div className='mostRatedProductnameSec'>
                                    <a href="#"><i className="roedArrow rotateArrow  mostRatedProductArrow fa-solid fa-arrow-right"></i></a>
                                </div>
                                <img src="src/assets/images/personWIthWatch.png" alt="" />
                                <div className='secOneBlockFourRatingAndLike'>
                                    <div className='secOneBlockFourRatingAndLikeContent'>
                                        <h4>People's Choice</h4>
                                        <p>product Simple Name</p>

                                    </div>
                                    <div className='secOneBlockFourRatingSec'>
                                        <div><i className="fa-solid star fa-star"></i>4.5</div>
                                        <div><i className="fa-solid heart fa-heart"></i>1.5k</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" secOneBlockFive secOneBlocks">

                    </div>
                </div>

            </div>
        </section>

    )

}

export default SecOne