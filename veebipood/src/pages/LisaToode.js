
// rfce

import { useRef, useState } from "react";

// ffc

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa uus toode!");
  const inputiLuger = useRef();

  function lisa() {
    // if () {} else {}
    // if (2*6 === 14) {
    // if (inputiLuger.current.value.startsWith("C") === true) {
    if (inputiLuger.current.value === "") {
    //  uuendaSonum("Tõene, jei!")
      uuendaSonum("Tühja nimega ei saa toodet lisada!")
    } else {
    //  uuendaSonum("Väär :(") 
      uuendaSonum("Uus toode lisatud " + inputiLuger.current.value);
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button>
    </div>
  )
}

export default LisaToode