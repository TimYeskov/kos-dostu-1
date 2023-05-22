import React from "react";
import Header from '../components/header'
import kosDosu from '../img/Kos.png'
import pasa from '../img/pasa.png'
import gomruk from '../img/gomruk.png'
import iqd from '../img/iqd.PNG'
import inn from '../img/5.PNG'
import amcam from '../img/amcam.JPG'
import ahk from '../img/ahk.PNG'
const Partner=()=>{
    return (
        <>
        <Header/>
        <h1 className="partner__title">Partnyorlar</h1>
        <div className="partner">
           <div  style={{display:"flex",justifyContent:"space-between"}}>
            <div className="partner__div">
                <div><img src={pasa}  alt=""  style={{width:"100px"}}/></div>
                <a href="https://www.pashabank.az">PAŞA Bank</a>
            </div>
            <div className="partner__div">
                <div><img src={gomruk} alt=""  style={{width:"100px"}}/></div>
                <a href="https://customs.gov.az ">Dövlət Gömrük Komitəsi</a>
            </div>
            <div  className="partner__div">
                <div><img src={iqd} alt="" style={{width:"100px"}} /></div>
                <a href="https://www.economy.gov.az/">İqtisadiyyat Nazirliyi</a>
            </div>
            </div>
         <div  style={{display:"flex",justifyContent:"space-between"}}>
            <div  className="partner__div">
                <div><img src={inn} alt=""  style={{width:"100px"}}/></div>
                <a href="https://www.idda.az ">İnnovasiya və Rəqəmsal İnkişaf Agentliyi</a>
            </div>
            <div  className="partner__div">
                <div><img src={amcam} alt="" style={{width:"100px"}}/></div>
                <a href="https://amcham.az ">AmCham Azerbaijan</a>
            </div>
            <div  className="partner__div">
                <div><img src={ahk} alt=""   style={{width:"100px"}}/></div>
                <a href="https://www.aserbaidschan.ahk.de/en/ ">AHK Azerbaijan</a>
            </div>
            </div>
            
        </div>
        </>
    )
}
export default Partner