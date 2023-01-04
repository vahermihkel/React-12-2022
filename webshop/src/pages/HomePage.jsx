import productsFromFile from "../data/products.json";

function HomePage() {

  const addToCart = () => {}

  return (
    <div>
      {productsFromFile.map(element => 
        <div key={element.id}>
          <img src={element.image} alt="" />
          <div>{element.id}</div> 
          <div>{element.name}</div>
          <div>{element.price}</div>
          <div>{element.image}</div>
          <div>{element.category}</div>
          <div>{element.description}</div>
          <div>{element.active}</div>
          <button>Lisa ostukorvi</button>
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

export default HomePage