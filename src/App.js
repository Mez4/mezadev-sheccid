import './App.scss';
import Sheccid from './components/Sheccid';
import MainContent from './components/MainContent';
import{
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
      <div className="App">
      <Routes>
        <Route path='/ElAmorDeMiVida' element={<Sheccid/>} />
        <Route path='/' element={<MainContent/>} />
      </Routes> 
      </div>

  );
}

export default App;
