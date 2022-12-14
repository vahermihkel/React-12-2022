import { useRef, useState } from "react"

function Seaded() {
  const [keel, muudaKeel] = useState(localStorage.getItem("veebilehe_keel") || "ee");
  const emailiViide = useRef(); // useReference
  const telefoniViide = useRef(); // phoneRef       emailRef

  // function muudaKeelEE() {

  // }

  const muudaKeelEE = () => {
    muudaKeel("ee");
    localStorage.setItem("veebilehe_keel", "ee");
  }

  const muudaKeelEN = () => {
    muudaKeel("en");
    localStorage.setItem("veebilehe_keel", "en");
  }

  const muudaKeelRU = () => {
    muudaKeel("ru");
    localStorage.setItem("veebilehe_keel", "ru");
  }

  const salvestaEmail = () => {
    localStorage.setItem("meie_email", emailiViide.current.value);
  }

  const salvestaTelefon = () => {
    localStorage.setItem("meie_telefon", telefoniViide.current.value);
  }


  return (
    <div>
      <label>Email</label>
      <input ref={emailiViide} type="text" />
      <button onClick={salvestaEmail}>Salvesta email</button>
      <br />
      <label>Telefon</label>
      <input ref={telefoniViide} type="text" />
      <button onClick={salvestaTelefon}>Salvesta telefon</button>
      <br />
      <button onClick={muudaKeelEE}>EST</button>
      <button onClick={muudaKeelEN}>ENG</button>
      <button onClick={muudaKeelRU}>RUS</button>
      { keel === "ee" && <div>Veebileht on eesti keelne</div> }
      { keel === "en" && <div>Veebileht on inglise keelne</div> }
      { keel === "ru" && <div>Veebileht on vene keelne</div> }
    </div>
  )
}

export default Seaded