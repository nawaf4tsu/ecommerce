import { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import './navBar.css'
import SeachBar from "./searchBarSec/searchBar";
import '../../../default.css'


function NavBar() {

    function hideNavBar() {
        
        useEffect(() => {
            const headBar = document.getElementById("headBar")
            let lastScrollTop = 0;

            const handleScroll = () => {
                let currentScroll = window.scrollY;

                if (currentScroll > lastScrollTop) {
                    headBar.classList.add("hideHeadBar")

                } else {
                    headBar.classList.remove("hideHeadBar")
                }

                lastScrollTop = currentScroll;
            };

            window.addEventListener("scroll", handleScroll);

        });
    }
    hideNavBar()

    return (
        <>
            <header className=' headBar' id="headBar">
                <div className='container-fluid headBarInner'>
                    <div className='right'>
                        <div className='logo'>
                            <a  ><h2>ZOEBIC</h2></a>
                        </div>
                    </div>
                    <div className="center">
                        <nav>
                            <ul>
                                <li><NavLink to={"/"} className={({ isActive }) =>
                                    isActive ? "active" : 'inActive'
                                }  >Home</NavLink></li>
                                <li><NavLink to={"/shop"} className='inActive'>Shop</NavLink></li>
                                <li><NavLink to={"/MostPopular"} className='inActive'>Most Popular</NavLink></li>
                                <li><NavLink to={"/about"} className='inActive'>About</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='left'>
                        <div className="signInSignUp">
                            <button className='signIn' onClick={() => { alert("wait sign in working on it") }} >Sign in</button>
                            <button className='signUp' onClick={() => { alert("wait sign up working on it") }} >Sign up</button>
                        </div>
                    </div>
                </div>
                <SeachBar />
            </header>
        </>
    )
}

export default NavBar 