import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsFromFile from "../../data/products.json";


function EditProduct() {
  const [idUnique, setIdUnique] = useState(true);
  const { productId } = useParams(); // path="admin/edit-product/:productId"
                                                       // 68186744 === "68186744"
  const productFound = productsFromFile.find(element => element.id === Number(productId));
  const index = productsFromFile.indexOf(productFound);
  // productFound võib olla, kas õige toode mida ta leidis VÕI tühjus ehk undefined kui ühtegi sellist pole
  // null (localStorage) ja undefined (kui toimus otsing/tsükkel) on tühjused
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();

  const changeProduct = () => {
    const updatedProduct = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.checked,
    }
    // .push(newProduct);
    productsFromFile[index] = updatedProduct;
    navigate("/admin/maintain-products");
  }

  const checkIdUniqueness = () => {
    const found = productsFromFile.find(element => element.id === Number(idRef.current.value));
    if (found === undefined) {     
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }
  }

  return (                              // tühjusest prooviti võtta mingi omadus     undefined.name
    <div>                               
      { productFound !== undefined && 
        <div>
          {idUnique === false && <div>Id ei ole unikaalne!</div>}
          <label>ID</label> <br />
          <input ref={idRef} onChange={checkIdUniqueness} defaultValue={productFound.id} type="number" /> <br />
          <label>Name</label> <br />
          <input ref={nameRef} defaultValue={productFound.name} type="text" /> <br />
          <label>Price</label> <br />
          <input ref={priceRef} defaultValue={productFound.price} type="number" /> <br />
          <label>Image</label> <br />
          <input ref={imageRef} defaultValue={productFound.image} type="text" /> <br />
          <label>Category</label> <br />
          <input ref={categoryRef} defaultValue={productFound.category} type="text" /> <br />
          <label>Description</label> <br />
          <input ref={descriptionRef} defaultValue={productFound.description} type="text" /> <br />
          <label>Active</label> <br />
          <input ref={activeRef} defaultChecked={productFound.active} type="checkbox" /> <br />
          <button disabled={idUnique === false} onClick={changeProduct}>Muuda</button>
        </div>}
      { productFound === undefined && <div>Toodet ei leitud</div>}
    </div>
  )
}

export default EditProduct

// EditProduct

// SingleProduct -- koju
// 1. URLis muutuja   /:id alusel
// 2. Kust siia lehele satun, pean tegema <Link to=""  ning saatma URLi sisse muutuja
//        element.id         (Link osas import)
// 3. useParams abil võtan selle muutuja siia faili (useParams osas import)
// 4. võtan kõik tooted (ehk teen productsFromFile osas importi)
// 5. otsin üles õige toote     leitudToode = tooted[index];
//          leitudToode = tooted.find(element => element.id === urlId)
// 6. urlis asuvad muutujad on alati sõnad ehk urlId on sõna aga element.id on alati numbrid
//      pean tegema teisenduse, mis muudab sõna numbriks
// 7. kuvan välja HTMLis leitudToode.id ja leitudToode.name
// 8. kontroll, et kui ei leitud üles, siis näita "Toodet ei leitud", mitte ära mine errorisse

// AddProduct - koju
// 9. 7x refi: idRef, nameRef, priceRef jne
// 10. 7x labeli ja inputi ja kõik ref-d sisestame inputi sisse
// 11. teeme nupu ja seome funktsiooniga
// 12. seome kõik refid kokku üheks objektiks, stiilis: {id: idRef.current.value, name: nameRef......}

// Editis:
// 13. paneme kõikide inputide sisse defaultValue=""
// 14. otsime üles õige järjekorranumbri, sest AINULT järjekorranumbriga saab muuta ja ka kustutada
// 15. asendame toote järjekorranumbri abil:    tooted[index] = uusToode;

// Addis
// 13. .push ühtseks objektiks tehtud toode