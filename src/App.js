import './App.scss';
import Sheccid from './components/Sheccid';
import MainContent from './components/MainContent';
import Momentos from './components/Momentos';
import Comidita from './components/Comidita';
import Viajes from './components/Viajes';

import{
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
      <div className="App">
      <Routes>
      <Route path='/ElAmorDeMiVida/Momentos' element={<Momentos/>} />
      <Route path='/ElAmorDeMiVida/Viajes' element={<Viajes/>} />
      <Route path='/ElAmorDeMiVida/Comidita' element={<Comidita/>} />
        <Route path='/ElAmorDeMiVida' element={<Sheccid/>} />
        <Route path='/' element={<MainContent/>} />
      </Routes> 
      </div>

  );
}

export default App;
