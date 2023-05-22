import React from "react";
import Header from '../components/header'
import kosDosu from '../img/Kos.png'
const Kabinet=()=>{
    return (
        < div className="kabinet__bg">
        <Header/>
        <div className="kabinet">
        <form>
        <div class="form-group">
    <label for="exampleInputEmail1">Ad və soyad</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
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
        </div>
    )
}
export default Kabinet