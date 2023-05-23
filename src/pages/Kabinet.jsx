import React from "react";
import Header from '../components/header'
import kosDosu from '../img/Kos.png'
import firstReg from '../img/1Reg.PNG'
import secondReg from '../img/2Reg.PNG'
import thirdReg from '../img/3Reg.PNG'
const Kabinet=()=>{
    return (
        < div className="kabinet__bg">
        <Header/>
        <div className="kabinet">
        <form>
        <div class="form-group">
    <label for="exampleInputEmail1">Ad və soyad</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name, Surname"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Əlaqə nömrəsi
</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Parol</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <button type="submit" class="btn btn-primary">Qeydiyyatdan keç</button>

</form>

        </div>
        <div className="regImg">
          <a href="https://asanlogin.my.gov.az/auth?origin=https:%2F%2Fmy.gov.az%2Findex"> <img src={firstReg}/></a>
          <a href="https://sima.az/az/apply-partner"><img src={secondReg}/></a>
          <a href="https://portal.asxm.gov.az/login ">  <img src={thirdReg}/></a>
  
</div>
        </div>
    )
}
export default Kabinet
