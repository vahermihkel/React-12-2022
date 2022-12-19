//rfce

import { useParams } from "react-router-dom"

function YksikToode() {
  const {index} = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];


  return (
    <div>
      YksikToode
      <div>{index}</div>
      <div>{tooted}</div>
    </div>
  )
}

export default YksikToode