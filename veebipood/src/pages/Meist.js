import { useState } from "react"


function Meist() {
  const [n2itaEmaili, uuendaN2itaEmaili] = useState(false);
  const [telefon, uuendaTelefon] = useState(localStorage.getItem("meie_telefon"));

  return (
    <div>
      <div>Meie e-mail: 
        {n2itaEmaili === true && localStorage.getItem("meie_email")} 
        {n2itaEmaili === false && <button onClick={() => uuendaN2itaEmaili(true)}>Näita emaili</button> }
      </div>
      <div>Meie telefoninumber: 
        {telefon} 
        {telefon.startsWith("+372") === false && <button onClick={() => uuendaTelefon("+372" + telefon)}>Pane +372 ette</button> }
      </div>
    </div>
  )
}

export default Meist