import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeroSection from './HeroSection';
import Home from './pages/Home';
import Footer from './Footer';
import FixedButtons from './components/FixedButtons';


function App() {


  return (
    <>
      <HeroSection/>
      <Home/>
      <FixedButtons/>
      <Footer/>
    </>
  )
}

export default App
