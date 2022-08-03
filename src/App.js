import './App.css';
import Home from './Home';
import Qrcode from './Qrcode';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='qrcodegenerator' element={<Qrcode/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
