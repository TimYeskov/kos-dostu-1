import React from "react";
import Header from '../components/header'
import sifEd from '../img/sifEd.PNG'
import fakEd from '../img/fakEd.PNG'
import akkEd from '../img/akkEd.PNG'
import malEdd from '../img/malEdd.PNG'
import dasEdd from '../img/dasEdd.PNG'
import malNot from '../img/malNot.PNG'
import qebz from '../img/qebz.PNG'
import payment from '../img/payment.PNG'
const Akkreditiv=()=>{
    return (
        <div className="akkreditiv">
         <Header/>
         <h1 className="akk__title">Akkreditiv</h1>
         <div className="akk__up">
            <img src={sifEd} alt="" />
            <img src={fakEd} alt="" />
            <img src={akkEd} alt="" />
            <img src={malEdd} alt="" />
            <img src={dasEdd} alt="" />
            <img src={malNot} alt="" />
            <img src={qebz} alt="" />
            <img src={payment} alt="" />
         </div>
        </div>
    )
}
export default Akkreditiv
