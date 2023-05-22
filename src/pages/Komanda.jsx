import React from "react";
import Header from '../components/header'
import person from '../img/2person.png'

const Komanda=()=>{
    return (
        <div className="komanda">
        <Header/>
        <div className="flex">
        <div className="left">
            <h1>Arzuların komandasını birlikdə yaradaq!</h1>
            <h4>İddiamız ölkənin ən yaxşı işəgötürəni olmaqdır. Bunu sən də yoxlaya bilərsən!</h4>
            <img src={person} alt="" />
        </div>
        <div className="right">
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
    <label for="exampleInputEmail1">Müraciət etdiyiniz vakansiya</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Əlavə</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <button type="submit" class="btn btn-primary">Göndər</button>
  <button type="submit" class="btn btn-primary">CV Yüklə</button>
</form>
        </div>
        </div>
       
        </div>
     
        
       
      
     
    )
}
export default  Komanda
