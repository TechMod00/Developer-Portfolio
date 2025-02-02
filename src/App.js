import './App.css';
import { BrowserRouter as Switch, Route, Router, Link, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path='/contact' element={<Contact />} />
        
        <Route path='/About' element={<About />} />

        <Route path='/projects' element={<Projects />} />

        <Route path='/' element={
          <div>
            <FirstSection />
            <SecondSection />
            <Footer />
          </div>}
        />

      </Routes>


    </BrowserRouter>
  );
}

export default App;
