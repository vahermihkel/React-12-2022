// rfce

import { useState } from "react"

function Avaleht() {
  const [kogus, uuendaKogus] = useState(7);
  const [sonum, uuendaSonum] = useState("");
  const [laigitud, uuendaLaigitud] = useState(true); // false true <- kahendväärtus/boolean

  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Panid tagasi nulli");
  }

  function vahenda() {
    uuendaKogus(kogus - 1);
    uuendaSonum("Vähendasid kogust");
  }

  function suurenda() {
    uuendaKogus(kogus + 1);
    uuendaSonum("Suurendasid kogust");
  }

  // Too many re-renders. React limits the number of renders to prevent an infinite loop.
  // Lahendus: onClick={() => }    () => puudu

  return (
    <div>
      {laigitud === true && <img onClick={() => uuendaLaigitud(false)} src="/laigitud.svg" alt="" />}
      {laigitud === false && <img onClick={() => uuendaLaigitud(true)} src="/mittelaigitud.svg" alt="" />}
      <button onClick={() => uuendaLaigitud(!laigitud)}>Muuda lemmikut</button>
      <div>{sonum}</div>
      { kogus > 0 && <button onClick={nulli}>Tagasi nulli</button> }
      <br />
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <div>{kogus}</div>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht