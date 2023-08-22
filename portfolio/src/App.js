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
    <div className="main">
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/projects" element = {<Projects/>}/>
        <Route path="/skills" element = {<Skills/>}/>
        <Route path="/contact" element = {<Contact/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
