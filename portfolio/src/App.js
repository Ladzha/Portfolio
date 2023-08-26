import './App.css';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="main column">
      <Navbar/>
      <Home/>
      <Footer/>  
    </div>
  );
}

export default App;
