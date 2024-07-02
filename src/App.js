import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
// import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
