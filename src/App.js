
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects';
import Contactpage from './pages/contactpage';
import ProjecDetails from './compo/projecDetails';
function App() {
  return (
    <div className="App">

    <Routes>  
      <Route path="/"  element={<Home/>} />
      <Route path="/projects"  element={<Projects/>} />
      <Route path="/contactpage"  element={<Contactpage/>} />
      <Route path="/projects/:id"  element={<ProjecDetails/>} />
    </Routes>
    </div>
  );
}

export default App;
