

function Meist() {
  return (
    <div>
      <div>Meie e-mail: {localStorage.getItem("meie_email")}</div>
      <div>Meie telefoninumber: {localStorage.getItem("meie_telefon")}</div>
    </div>
  )
}

export default Meist