import React from "react";
import Header from '../components/header'
import kosDosu from '../img/kos.jpg'
import OnlineHelp from "../components/OnlineHelp";
const KosDostu=()=>{
    return (
        <>
        <Header/>
        <div className="kos">
            <h1>“KOS Dostu” ilə biznesiniz güvəndədir</h1>
            <div className="kos_flex">
                <h4>“KOS Dostu” PAŞA Bankın kiçik və orta biznes sahibkarlarına öz idxal və ixrac əməliyyatlarını təhlükəsiz yolla həyata keçirmələrini təmin edən SME məhsuludur.</h4>
                <img src={kosDosu} alt="" />
            </div>
           
                <p>Biz idxal və ixrac əməliyyatlarını həyata keçirən KOB sahibləri üçün vacib olan bir sıra təhlükəsizlik xüsusiyyətləri təklif edirik. Məsələn, platformamızla daşınmaların real vaxt rejimində izlənilməsini və monitorinqini təklif edirik ki, bu da biznes sahiblərinə hər zaman məhsullarının dəqiq yerini və statusunu bilməyə imkan verir.
Bundan əlavə, sahibkarlara fırıldaqçılıq və oğurluqdan qorunmaq üçün möhkəm təhlükəsizlik tədbirləri təklif edirik. Platforma məhsulların daşınması və saxlanması zamanı təhlükəsiz saxlanmasını təmin etmək üçün fiziki və rəqəmsal təhlükəsizlik tədbirlərinin birləşməsindən istifadə edir.
 “KOS Dostu” idxal və ixrac əməliyyatlarını təhlükəsiz həyata keçirmək istəyən KOB sahibləri üçün əla məhsuldur. Qlobal daşınma şəbəkəsi və möhkəm təhlükəsizlik tədbirləri ilə biznes sahibləri məhsullarının etibarlı əllərdə olduğuna əmin ola bilərlər.</p>
          
        </div>
       <OnlineHelp/>
        </>
    )
}
export default KosDostu
