import config from "../data/config.json";
import { ToastContainer } from 'react-toastify'; 
import { useEffect, useState } from 'react';
import { Spinner } from "react-bootstrap";
import SortButtons from "../components/home/SortButtons";
import Product from "../components/home/Product";
import CarouselGallery from "../components/home/CarouselGallery";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setDbProducts(json);
        setLoading(false);
      });
  }, []);

  // parem inspect -> application -> Local Storage   "cart"

  const filterByCategory = (categoryClicked) => {
    const result = dbProducts.filter(element => element.category === categoryClicked);
    setProducts(result);
  }

  const categories = [...new Set(dbProducts.map(element => element.category))];

  if (isLoading === true) {
    return (<Spinner />)
  }

  return (
    <div>
      <CarouselGallery />
            {/* Payment sum={calculateCartSum()} */}
      <SortButtons products={products} setProducts={setProducts} />
      <div>{products.length} tk</div>
      {/* <button onClick={() => filterByCategory("belts")}>belts</button>
      <button onClick={() => filterByCategory("jeans")}>jeans</button> */}
      {categories.map(element => <button key={element} onClick={() => filterByCategory(element)}>{element}</button>)}
      <ToastContainer />
      {products.map(element => 
          <Product key={element.id} element={element} />
        )}
    </div>
  )
}

/*  <img src={element.image} alt="" />
    <div>unikaalsuse tunnus (URLi saatmisel, .map sees key, kustutamisel) - {element.id} - genereerisin ise</div> 
    <div>{element.name} - täispikk nimi, mina võtsin 3 esimest sõna</div>
    <div>ostukorvi kogusumma - {element.price} - võtsin dollari järgse hinna, aga kui oli 2 hinda from to, siis suurema</div>
    <div>{element.image} - pildi URL lehel</div>
    <div>kategooria alusel filtreerimist - {element.category} - mis panime otsingusse</div>
    <div>seda näeb vaid peale klikkides (üksik toode) - {element.description} - täispikk nimi</div>
    <div>mitteaktiivseid tooteid ei näita välja - {element.active} - kõigile panin active true'ks</div>
    <button>Lisa ostukorvi</button> */

// [
    // {
    //   "id": 44272736,
    //   "image": "https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png",
    //   "name": "Shop on eBay",
    //   "price": 20,
    //   "description": "Shop on eBay",
    //   "category": "jeans",
    //   "active": true
    // },
    // {
    //   "id": 44272736,
    //   "image": "https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png",
    //   "name": "Shop on eBay",
    //   "price": 20,
    //   "description": "Shop on eBay",
    //   "category": "jeans",
    //   "active": true
    // },
    // {
    //   "id": 62720814,
    //   "image": "https://i.ebayimg.com/thumbs/images/g/mTkAAOSw9IZf46Kp/s-l225.webp",
    //   "name": "Pantalone Uomo Invernale",
    //   "price": 31.66,
    //   "description": "Pantalone Uomo Invernale Felpato Termico Jeans Comodo Imbottito In Pile VEQUE",
    //   "category": "jeans",
    //   "active": true
    // },
// ]


// [
    //{product: {
    //   "id": 44272736,
    //   "image": "https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png",
    //   "name": "Shop on eBay",
    //   "price": 20,
    //   "description": "Shop on eBay",
    //   "category": "jeans",
    //   "active": true
    // },
    // quantity: 3
    //},
    //{product:  {
    //   "id": 62720814,
    //   "image": "https://i.ebayimg.com/thumbs/images/g/mTkAAOSw9IZf46Kp/s-l225.webp",
    //   "name": "Pantalone Uomo Invernale",
    //   "price": 31.66,
    //   "description": "Pantalone Uomo Invernale Felpato Termico Jeans Comodo Imbottito In Pile VEQUE",
    //   "category": "jeans",
    //   "active": true
    // },
    // quantity: 3
    //},
// ]

export default HomePage