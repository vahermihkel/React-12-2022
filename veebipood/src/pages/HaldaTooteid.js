import { useState } from "react"
import { Link } from "react-router-dom";

function HaldaTooteid() {
  const [tooted, muudaTooted] = useState(JSON.parse(localStorage.getItem("tooted")) || []);

  const kustuta = (index) => {
    // proovige ise (poed.js / ostukorv.js)
    // enne visuaal ---> mõlemas olemas
    // siis ka localStorage --> ostukorv.js
    tooted.splice(index,1);
    muudaTooted(tooted.slice());
    localStorage.setItem("tooted", JSON.stringify(tooted));
  } 

  return (
    <div>
      {tooted.map( (element,index) => 
        <div key={index}>
          {element}
          <button onClick={() => kustuta(index)}>Kustuta</button>
          <Link to="/muuda">
            <button>Muuda</button>
          </Link>
        </div> )}
    </div>
  )
}

export default HaldaTooteid