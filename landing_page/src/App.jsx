import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeroSection from './HeroSection';
import Home from './pages/Home';
import Phone from "./components/Phone.jsx";
import WhatsApp from "./components/WhatsApp.jsx";
import GoToTop from "./components/GoToTop.jsx";
import Footer from './Footer';


function App() {


  return (
    <>
      <HeroSection/>
      <Home/>
      <Phone/>
      <WhatsApp/>
      <GoToTop/>
      <Footer/>
    </>
  )
}

export default App
