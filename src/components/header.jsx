import React from "react";
import az from '../img/azerbaijan.svg'
import ru from '../img/russia.png'
import un from '../img/un.png'
import search from '../img/search.svg'
import logo from '../img/logo.PNG'
import { Link } from "react-router-dom";
const Header=()=>{
    return (
        <header>
            <div className="lago">
            <Link to='/'><img src={logo} alt="logo"/></Link>
            </div>
           
            <div className="header__right">
            <Link to='/Kabinet'> <a>Şəxsi kabinet</a></Link>
                <div>
                  
                    <input class="form-control mr-sm-2" type="search" placeholder="Axtar" aria-label="Search"/>

                </div>
                
               <div className="langDiv">
                <img src={az} alt="az" className="lang"/>
                <img src={ru} alt="" className="lang"/>
                <img src={un} alt="" className="lang"/>
               </div>
            </div>
           </header>
    )
}
export default Header
