import './searchBar.css'
import axios from '../../../../axios';
import { API_KEY_ALL_DATA } from '../../../../constants/constant'
import QueryAnswerCard from './queryAnswerCard/queryAnswerCard';
import { useEffect, useState } from 'react'

function SeachBar() {
    const [serveData, setServeData] = useState()
    const [queries, setQueries] = useState();
    useEffect(() => {

        async function toGetDataToSearch() {
            await axios.get(API_KEY_ALL_DATA)
                .then((response) => {
                    setServeData(response.data)
                })
        }
        toGetDataToSearch();

        const mainInput = document.getElementById('mainInput');
        const mainInputSec = document.getElementById('mainInputSec')
        const mainInputIcon = document.getElementById('mainInputIcon')
        const mainInputLblIn = document.getElementById('mainInputLblIn')
        const bodyELe = document.querySelector('body')

        mainInput.addEventListener('input', (e) => {
            const query = e.target.value
            setQueries(query)
            if (query.length > 0) {
                mainInputSec.classList.add("showMainInput")
                mainInputIcon.classList.add("fa-xmark")
                bodyELe.style.overflow = "hidden"

            } else {
                mainInputSec.classList.remove("showMainInput")
                mainInputIcon.classList.remove("fa-xmark")
                bodyELe.style.overflow = ""

            }
            mainInputLblIn.addEventListener('click', () => {
                mainInput.value = "";
                mainInputSec.classList.remove("showMainInput")
                mainInputIcon.classList.remove("fa-xmark")
                bodyELe.style.overflow = ""
            })
        })



    }, [])

    const [searchAnswer, setSearchAnswer] = useState();
    useEffect(() => {
        const finalQueries = queries?.toLowerCase();
        const readyToGive = (serveData ? serveData : []).filter((item) => {
            const finalItem = item.proSimpleName.toLowerCase().replace(/\s+/g, '');
            const finalItemSpaced = item.proSimpleName.toLowerCase()
            return finalItem.includes(finalQueries ? finalQueries : ''.toLowerCase()) || finalItemSpaced.includes(finalQueries ? finalQueries : ''.toLowerCase(),)
        })
        console.log(readyToGive);

        setSearchAnswer(readyToGive ? readyToGive : [])
    }, [queries, serveData])

    return (
        <div className='searchBar container'>
            <div className="searchBarInner">
                <div className="languageSelectSec">
                    <button onClick={() => { alert("languages is coming") }} className="languageSelectBtn">
                        English <i className="bi bi-caret-down-fill"></i>
                    </button>
                </div>
                <div className='mainInputSec' id='mainInputSec'>
                    <label htmlFor="mainInput" className='mainInputLbl' >
                        <input type="text" id="mainInput" />
                        <label className='mainInputLblIn' id='mainInputLblIn' htmlFor="mainInput"><i id='mainInputIcon' className="fa-solid fa-magnifying-glass"></i></label>
                    </label>
                    <div className='queryAnswerBox'>
                        {
                            searchAnswer?.map((items) => (
                                <QueryAnswerCard key={items._id} searchData={items} />
                            ))
                        }
                    </div>
                </div>
                <div className='cartsAndTechSupportSec'>
                    <div className='cartSec'>
                        <button onClick={() => {
                            const cartSection = document.getElementById('cartSection');
                            cartSection.classList.add('cartActive')
                        }}><i className="fa-solid navIcons fa-cart-shopping" ></i> Cart</button>
                        <button><i className="fa-solid navIcons heart fa-heart" ></i></button>
                    </div>
                    <div className='suppSec'>
                        <button><i className="fa-solid navIcons fa-headset"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SeachBar