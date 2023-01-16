import { Link, Route, Routes } from 'react-router-dom';
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
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  }

  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
          </Nav>
          <img className="lang" onClick={() => changeLang("en")} src="/english.png" alt="" />
          <img className="lang" onClick={() => changeLang("ee")} src="/estonia.png" alt="" />
        </Container>
      </Navbar>

      <Routes>
        <Route path="" element={ <HomePage /> }  />
        <Route path="cart" element={ <Cart /> }  />
        <Route path="shops" element={ <Shops /> }  />
        <Route path="contact" element={ <ContactUs /> }  />
        <Route path="product" element={ <SingleProduct /> }  />
        <Route path="admin" element={ <AdminHome /> }  />
        <Route path="admin/add-product" element={ <AddProduct /> }  />
        <Route path="admin/edit-product/:productId" element={ <EditProduct /> }  />
        <Route path="admin/maintain-categories" element={ <MaintainCategories /> }  />
        <Route path="admin/maintain-products" element={ <MaintainProducts /> }  />
        <Route path="admin/maintain-shops" element={ <MaintainShops /> }  />
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
// Leafleti poed andmebaasi
// makse (Everypay)

// 18.01 -- 14   13.00-16.45
// loaderid
// child/parent componendid props
// dünaamiline CSS
// globaalne muutuja useContext - ostukorvi kogusumma
// vormi valideerimine

// 19.01 -- 15 17.00-20.15
// globaalne muutuja sisselogimine/registreerumine
// et näha admini vaadet
// peidame ära nupu "Admin vaatesse" kui pole sisse logitud
// kui minnakse ise localhost:3000/admin , siis suunab viisakalt localhost:3000/login

// 23.01 -- 16  karusell-galerii, faili üleslaadimine Firebase-i, radio buttonid

// 11.02 -- 17 --- proovitöö minupoolne variant
// 13-17.02 -- 18 --- projekti esitlemine
