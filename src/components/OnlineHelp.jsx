import React, { useState } from 'react';
import '../App.scss'
import send from '../img/send.png'
const OnlineHelp = () => {
  const [showForm, setShowForm] = useState(false);

  const openChatWindow = () => {
     document.getElementById('chat-form-container').style.display='block'
  };
  const closeChatWindow=()=>{
    document.getElementById("chat-form-container").style.display='none'
  }
  
 

  return (
    <>
    <button className="open-btn" onClick={openChatWindow}>

      Online konsultant
    </button>
    <div className='chat-popup' id='chat-form-container'>
       <form action="#" className='form-container'>
        <div className='chat-window-head'>
          <h4> Online konsultant</h4>
          <span className='close-btn' onClick={closeChatWindow}>
            <i className='fa fa-times'></i>
            close
          </span>
        </div>
        <div className='msg-container'>
          <div className='msg'>
            <p>Salam, sizə necə kömək edə bilərəm?</p>
            <span>09:34pm</span>
          </div>
        </div>
        <div className='chat-box-container'>
          <div className='chat-box'>
            <input type="text" placeholder='Type your message..'  name='msg' required/>
            <button type='submit' className='btn'>
              <i className='fa fa-chevron-circle-right send-btn'>
              
              </i>
               <img src={send} style={{width:"20px",textAlign:"center", display:"flex",position:"relative",left:"5px"}} alt="" />
             </button>
          </div>
        </div>
       </form>
    </div>
    </>
  );
};

export default OnlineHelp;