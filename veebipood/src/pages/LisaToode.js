
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
      uuendaSonum("Uus toode lisatud " + inputiLuger.current.value); // "Sprite"

      let tootedLS = localStorage.getItem("tooted"); // "["Coca-cola","Fanta"]"         null
      tootedLS = JSON.parse(tootedLS) || [];    // ["Coca-cola","Fanta"]                 []
      tootedLS.push(inputiLuger.current.value); // ["Coca-cola","Fanta", "Sprite"]       ["Sprite"]
      tootedLS = JSON.stringify(tootedLS);      // "["Coca-cola","Fanta", "Sprite"]"    "["Sprite"]"
      localStorage.setItem("tooted", tootedLS); // key | value

      // const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
      // tooted.push(inputiLuger.current.value);
      // localStorage.setItem("tooted", JSON.stringify(tooted));

      // 1. võtame localStoragest kõik varasemad väärtused
      // 2. võtame jutumärgid maha (sest localStorage annab meile VAID jutumärkidega väärtusi)
      //            VÕI kui on tühjus, asendame tühja Array-ga
      // 3. lisame ühe toote vastsaadud Array-sse juurde
      // 4. paneme jutumärgid tagasi (sest localStorage võtab vastu VAID jutumärkidega väärtusi)
      // 5. paneme localStorage-sse uued väärtused

      // localStorage.getItem
      // JSON.parse()   || []
      // [].push
      // JSON.stringify()
      // localStorage.setItem <--- setItem kustutab ära vana väärtuse, asendades sellega, mis ma ütlen
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