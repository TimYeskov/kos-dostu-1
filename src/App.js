import Home from './Home';
import './App.scss';
import { Routes, Route} from 'react-router-dom';
import KosDostu from './pages/Kos-Dostu';
import Haqqimizda from './pages/Haqqimizda';
import Missiya from './pages/Missiya';
import Maliyya from './pages/Maliyya';
import Komanda from './pages/Komanda';
import Partner from './pages/Partner';
import Kabinet from './pages/Kabinet';
import Qarantiya from './pages/Qarantiya';
import Akkreditiv from './pages/Akkreditiv'
import OnlineHelp from './components/OnlineHelp';
function App() {
  return (
    <>
    <Routes>
 <Route path="/" element={<Home/>} />
 <Route path="/KOS-Dostu" element={<KosDostu/>}/>
 <Route path='/Haqqimizda' element={<Haqqimizda/>}/>
 <Route path='/Missiya' element={<Missiya/>}/>
 <Route path='/Maliyya' element={<Maliyya/>}/>
 <Route path='/Karyera' element={<Komanda/>}/>
 <Route path='/Partner' element={<Partner/>}/>
 <Route path='/Kabinet' element={<Kabinet/>}/>
 <Route path='/Qarantiya' element={<Qarantiya/>}/>
 <Route path='/Akkreditiv' element={<Akkreditiv/>}/>
    </Routes>
    <OnlineHelp/>
    </>
  );
}

export default App;
