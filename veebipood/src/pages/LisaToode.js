
// rfce

import { useState } from "react";

// ffc

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa uus toode!");

  function lisa() {
    uuendaSonum("Uus toode lisatud!");
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input type="text" /> <br />
      <button onClick={lisa}>Sisesta</button>
    </div>
  )
}

export default LisaToode