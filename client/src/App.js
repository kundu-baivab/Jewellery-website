import './App.css';
import Home from './components/home';
import Register from './components/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Headermain from "./components/Headermain";
import Footer from "./components/Footer";
import Merged from "./components/Merged";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import OurStore from "./pages/OurStore.js";
import Details from './components/Details';

function App() {
  return (
    <div>
      <Headermain/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Merged />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<OurStore />} />
        <Route path="/gallery/:id" element={<Details/>} />
        <Route path='/owner' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
