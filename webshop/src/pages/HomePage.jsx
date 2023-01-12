import config from "../data/config.json";
import { ToastContainer, toast } from 'react-toastify'; 
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

function HomePage() {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const addToCart = (productClicked) => {
    let cartLS = localStorage.getItem("cart");
    cartLS = JSON.parse(cartLS) || [];
    // kokkulepe: kui index on -1, see tähendab, et seda pole seal arrays olemas
    const index = cartLS.findIndex(element => element.product.id === productClicked.id);
    if (index >= 0) {
      // suurenda kogust
      // kui ta on juba ostukorvis olemas
      cartLS[index].quantity = cartLS[index].quantity + 1;
    } else {
      // lisa lõppu juurde kogusega 1
      // kui teda pole ostukorvis olemas
      cartLS.push({"product": productClicked, "quantity": 1});
    }
    cartLS = JSON.stringify(cartLS);
    localStorage.setItem("cart", cartLS);
    toast.success(t("added-to-cart"), {"position": "bottom-right", "theme": "dark"});
  }
  // parem inspect -> application -> Local Storage   "cart"

  return (
    <div>
      <ToastContainer />
      {products.map(element => 
        <div key={element.id}>
          <img src={element.image} alt="" />
          <div>{element.name}</div>
          <div>{element.price}</div>
          <button onClick={() => addToCart(element)}>Lisa ostukorvi</button>
        </div> )}
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