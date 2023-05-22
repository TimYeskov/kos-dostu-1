import React from "react";
import Header from '../components/header'
import missiya from '../img/missiya.jpg'

const Missiya=()=>{
    return (
       <div className="missiya">
        <div className="left">
            <img src={missiya} alt="" />
        </div>
        <div className="right">
            <Header/>
            <h1>Missiya və məqsədlər</h1>
            <h4>Biz sahibkarlara qlobal bazarda böyümək və rəqabət aparmaq imkanı verən qüsursuz və etibarlı xidmət təqdim edirik.</h4>
            <p>    Kiçik və Orta sahibkarların idxal və ixrac əməliyyatlarının bir platformada rahat, vaxt itirmədən, filiallara gəlmədən, imzaya ehtiyac olmadan ölkənin ədliyyə, notarial və gömrük sistemlərinə inteqrasiya olunmuşdur.
            </p>
            <p>Bizim missiyamız bizneslərə idxal və ixrac əməliyyatlarını real vaxt rejimində izləmək üçün istifadəçi dostu və təhlükəsiz platforma təqdim etməkdir. Ən son texnologiyadan istifadə etməklə biz qlobal ticarətin mürəkkəbliklərini sadələşdirməyi, səhvlər və gecikmə riskini azaltmağı hədəfləyirik.
            </p>
        </div>
       </div>
    )
}
export default Missiya