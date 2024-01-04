
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/About/About';
import Details from './pages/Details/Details';
import AllCategories from './pages/allCategory/AllCategories';
import CartDetails from './pages/cardDetails/CardDetails';
import Search from './pages/search/Search';
import ContactUs from './pages/contactUs/ContactUs';
import Footer from './components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

      useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/allCategories/details/:productId' element={<Details/>}/>
        <Route path='/allCategories/:categoryName/details/:productId' element={<Details/>}/>
        <Route path='/search/:searchTitle/details/:productId' element={<Details/>}/>
        <Route path='/details/:productId' element={<Details/>}/>
        <Route path='/allCategories' element={<AllCategories/>}/>
        <Route path='/allCategories/:categoryName' element={<AllCategories/>}/>
        <Route path='/cart' element={<CartDetails/>}/>
        <Route path='/search/:searchTitle' element={<Search/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
