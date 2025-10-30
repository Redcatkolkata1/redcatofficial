import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import OurTeam from './components/OurTeam';
import Gallery from './components/Gallery'
import Products from './components/Products';
import Privacy from './components/Privacy';
import Contact from './components/Contact';
import MSeries from './components/MSeries';
import Zplus from './components/Zplus';
import Finsure from './components/Finsure';
import Imagine from './components/Imagine';
import Glock from './components/Glock';
import Pryme from './components/Pryme';
import Ilock from './components/Ilock';
import Values from './components/Values'
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/products" element={<Products isStandalone={true} />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path="/team" element={<OurTeam isStandalone={true} />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path="/contact" element={<Contact isStandalone={true} />} />
          <Route path='/products/mcops-series' element={<MSeries />} />
          <Route path='/products/mcops-zpro' element={<Zplus />} />
          <Route path='/products/mcops-finsure' element={<Finsure />} />
          <Route path='/products/imagine' element={<Imagine />} />
          <Route path='/products/mcops-series/glock' element={<Glock />} />
          <Route path='/products/mcops-series/pryme' element={<Pryme />} />
          <Route path='/products/mcops-series/ilock' element={<Ilock />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;


