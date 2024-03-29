import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Shops from "./pages/Shops"; // imporditud on default kaudu:   export default Shops
import { ContactUs } from "./pages/ContactUs"; // imporditud const kaudu:   export const ContactUs
import SingleProduct from "./pages/SingleProduct";
import AdminHome from "./pages/admin/AdminHome";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import MaintainCategories from "./pages/admin/MaintainCategories";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainShops from "./pages/admin/MaintainShops";
import NavigationBar from './components/NavigationBar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useContext } from 'react';
import AuthContext from './store/AuthContext';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      
      <NavigationBar />

      <Routes>
        <Route path="" element={ <HomePage /> }  />
        <Route path="cart" element={ <Cart /> }  />
        <Route path="shops" element={ <Shops /> }  />
        <Route path="contact" element={ <ContactUs /> }  />
        <Route path="product/:productId" element={ <SingleProduct /> }  />
        {authCtx.loggedIn === true && 
        <>
          <Route path="login" element={ <Navigate to="/admin" /> }  />
          <Route path="signup" element={ <Navigate to="/admin" /> }  />
          <Route path="admin" element={ <AdminHome /> }  />
          <Route path="admin/add-product" element={ <AddProduct /> }  />
          <Route path="admin/edit-product/:productId" element={ <EditProduct /> }  />
          <Route path="admin/maintain-categories" element={ <MaintainCategories /> }  />
          <Route path="admin/maintain-products" element={ <MaintainProducts /> }  />
          <Route path="admin/maintain-shops" element={ <MaintainShops /> }  />
        </>}
        {authCtx.loggedIn === false && 
          <>
            <Route path="admin/*" element={ <Navigate to="/login" /> }  />
            <Route path="login" element={ <Login /> }  />
            <Route path="signup" element={ <Signup /> }  />
          </>
          }
        {/* <Route path="*" element={ <Navigate to="/" /> }  /> */}
        <Route path="*" element={ <div>404 Not Found</div> }  />
      </Routes> 
    </div>
  );
}

export default App;


// 05.12 -- 1xx
// 07.12 -- 2xx
// 12.12 -- 3xx
// 14.12 -- 4xx
// 19.12 -- 5xx
// 21.12 -- 6xx
// 02.01 -- 7xx  koju: Bootstrap mõnes teises projektis (eesti k veebileht, tegelased, uudised)
// 04.01 -- 8xx  koju: tõlge (i18next) mõnes teises projektis (eesti k veebileht, tegelased, uudised)
// 05.01 -- 9 17.00-20.15
// 09.01 -- 10   13.00-16.45     14.45-15.00
// EditProduct --- eesti k järgi
// KOJU: AddProduct, SingleProduct, Sorteerimine (eesti k järgi), Kategooriate alusel filtreerimine
// 2 faili array'de
// array'd: ID unikaalsuse kontroll, otsingu

// 11.01 -- 11  9.00-10.30
// Firebase-i üles (eesti k järgi), kaardirakendus (Leaflet), e-maili saatmine (emailjs)
// https://react-leaflet.js.org/
// https://www.emailjs.com/

// 12.01 -- 12 17.30-20.45
// pakiatuomaatide võtmine,
// andmebaasi tooted üles, Firebase, API päringud, fetch(), useEffect, Postman
// KOJU: API päringute failid

// 16.01 -- 13  13.00-16.45
// andmebaasi panemine - Editis ja Addis
// kategooriad andmebaasi
// makse (Everypay)

// 18.01 -- 14   13.00-16.45
// Leafleti poed andmebaasi
// loaderid
// vormi valideerimine
// dünaamiline CSS
// child/parent componendid props

// 19.01 -- 15 17.00-20.15
// child/parent componendid props
// globaalne muutuja useContext - ostukorvi kogusumma
// karusell-galerii, faili üleslaadimine Firebase-i, radio buttonid

// 23.01 -- 16
// globaalne muutuja sisselogimine/registreerumine
// et näha admini vaadet
// peidame ära nupu "Admin vaatesse" kui pole sisse logitud
// kui minnakse ise localhost:3000/admin , siis suunab viisakalt localhost:3000/login

// 11.02 -- 17 13.00-16.15 --- proovitöö minupoolne variant
// 13-17.02 -- 18  13.00-14.30 --- projekti esitlemine

// 1. Reactis tehtud projekt
// 2. Firebases või kuskil üleval 
