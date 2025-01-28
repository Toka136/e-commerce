import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import About from './components/About';
import Navbar from './components/Navbar';
import personInfo from './components/PersonInfo';
import SliderHome from './components/SliderHome';
import Sidebar from './components/Sidebar';
import ListOfProduct from './components/ListOfProduct';
import Glideslider from './components/Glideslider';
import ListCat from './components/ListCat';
import Bestproducts from './components/Bestproducts';
import {  Routes, Route } from "react-router-dom";
import Productfromcat from './components/Productfromcat';
import Ourproducts from './components/Ourproducts';
import Notfound from './components/Ntofound';
import Contact from './components/Contact';
import Homepage from './components/Homaepage';
import Logout from './components/Logout';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Wishlist from './components/Wishlist';
import Changepass from './components/Changepass';
import Checkout from './components/Checkout';
import Womenfashion from './components/Womenfahion';
import Details from './components/Details';
import Searchprod from './components/Searchprod';
// import Wishlist from './components/Wishlist';
function App() {
  return (
   <RecoilRoot>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Homepage/>}/>
      <Route path='signup/login' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='category/:categoryname/:btnvalue' element={<Productfromcat/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='*' element={<Notfound/>}/>
      <Route path='logout' element={<Logout/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='wish' element={<Wishlist/>}/>
      <Route path='forgetpass' element={<Changepass/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path='fashion/:categoryname' element={<Womenfashion />}/>
      <Route path='detailspage/:prodid' element={<Details />}/>
      <Route path='search/:word' element={<Searchprod />}/>
      
    </Routes>
    
    <Footer />
  
   </RecoilRoot>
  );
}

export default App;
