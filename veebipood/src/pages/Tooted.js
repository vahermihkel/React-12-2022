import { Link } from "react-router-dom";

function Tooted() {
  // const [tooted, uuendaTooted] = useState()
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];

  const lisaOstukorvi = (klikitudToode) => {
    let ostukorvLS = localStorage.getItem("ostukorv");
    ostukorvLS = JSON.parse(ostukorvLS) || [];
    ostukorvLS.push(klikitudToode);
    ostukorvLS = JSON.stringify(ostukorvLS);
    localStorage.setItem("ostukorv", ostukorvLS);

    // const ostukorv = JSON.parse(localStorage.getItem("ostukorv")) || [];
    // ostukorv.push(klikitudToode);
    // localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
  }
  
  return (
    <div>
      {tooted.map( (element,index) => 
        <div key={index}>
          <Link to={"/toode/" + index}>
            <img src={element.pilt} alt="" />
            <div>{element.nimi}</div>
            <div>{element.hind}</div>
            <div>{element.aktiivne}</div>
          </Link>
          <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default Tooted