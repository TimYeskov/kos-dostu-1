import React, { useRef } from "react"

import plus from'./img/plus.png'
import arrowRight from'./img/arrowRigth.png'
import { Link } from 'react-router-dom';
import Header from "./components/header";
import OnlineHelp from "./components/OnlineHelp";

const Home=()=>{
  const divRef1=useRef(null)
  const divRef2=useRef(null)
  const divRef3=useRef(null)
  const divRef4=useRef(null)
const action=(ref,)=>{
    if (ref.current) {
        ref.current.classList.toggle('active');
      }
}
    return (
        <div className="main">
          <Header/>
           <div className="sections">
         
              <div className="left">
                <div>
                <Link to='/KOS-Dostu'><img src={plus} alt="plus" className="plus"/></Link>
                <h1>“KOS Dostu” ilə biznesiniz güvəndədir</h1>
                <img src={arrowRight} alt="arrow"  className="arrow"/>
                </div>
              </div>
              <div className="right">
              <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <div className="container">
                    <img src={plus} alt="plus" className="plus" onClick={()=>action(divRef1)}/>
                 <h1  className="h1">Haqqımızda</h1>
                    <div className="about" ref={divRef1}>
                    <Link to='/Haqqimizda'><h4>Haqqımızda</h4></Link>
                    <Link to='/Missiya'> <h4>Missiya və məqsədlər</h4></Link>
                    <Link to='/Karyera'> <h4>Karyera</h4></Link>
                    <Link to='/Maliyya'>  <h4>Maliyyə Hesabatları </h4></Link>
                 
                    </div>
                </div>
                <div  className="container">
                <img src={plus} alt="plus" className="plus" onClick={()=>action(divRef2)}/>
                    <h1 className="h1"  >Partnyorlar</h1>
                    <div className="about" ref={divRef2}>
                      <Link to="Partner"><h4>Partnyorlar</h4></Link>  
                        
                    </div>
                </div>
                <div  className="container">
                <img src={plus} alt="plus" className="plus"  onClick={()=>action(divRef3)}/>
                    <h1 className="h1"  >Onlayn xidmətlər</h1>
                    <div className="about" ref={divRef3}>
                       <Link to='Akkreditiv'> <h4>Akkreditiv</h4></Link>
                       <Link to='Qarantiya'><h4>Qarantiya</h4></Link> 
                      
                    </div>
                </div>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
               
                <div  className="container">
                <img src={plus} alt="plus" className="plus" onClick={()=>action(divRef4)}/>
                    <h1 className="h1"  >Xəbərlər</h1>
                    <div className="about" ref={divRef4}>
                        <h4>Press-relizlər</h4>
                        <h4>Bülleten</h4>
                       
                    </div>
                </div>
                </div>
               
                
              </div>
           </div>
          
        </div>
    )
}
export default Home
