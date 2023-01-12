import { useEffect, useRef, useState } from 'react';
import config from "../../data/config.json";

function AddProduct() {
    const [dbProducts, setDbProducts] = useState([]);
    const [idUnique, setIdUnique] = useState(true);
    const idRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();
    const activeRef = useRef();

    useEffect(() => {
      fetch(config.productsDbUrl)
        .then(res => res.json())
        .then(json => {
          setDbProducts(json);
        });
    }, []);

    const addProduct = () => {
        const newProduct = {
            id: Number(idRef.current.value),
            name: nameRef.current.value,
            price: Number(priceRef.current.value),
            image: imageRef.current.value,
            category: categoryRef.current.value,
            description: descriptionRef.current.value,
            active: activeRef.current.checked
        }
        dbProducts.push(newProduct); 
        // lisamine ei tööta --- eraldi API päringu ülalolevale veebilehele      
    }

    const checkIdUniqueness = () => {
      const found = dbProducts.find(element => element.id === Number(idRef.current.value));
      if (found === undefined) {     
        setIdUnique(true);
      } else {
        setIdUnique(false);
      }
    }

    return (
        <div>
            {idUnique === false && <div>Id ei ole unikaalne!</div>}
            <label>ID:</label><br />
            <input ref={idRef} type="number" onChange={checkIdUniqueness} /><br />
            <label>Name:</label><br />
            <input ref={nameRef} type="text" /><br />
            <label>Price:</label><br />
            <input ref={priceRef} type="number" /><br />
            <label>Image:</label><br />
            <input ref={imageRef} type="text" /><br />
            <label>Category:</label><br />
            <input ref={categoryRef} type="text" /><br />
            <label>Description:</label><br />
            <input ref={descriptionRef} type="text" /><br />
            <label>Active:</label><br />
            <input ref={activeRef} type="checkbox" /><br />
            <button disabled={idUnique === false} onClick={addProduct}>Add product</button>
        </div>
    );
}

export default AddProduct;