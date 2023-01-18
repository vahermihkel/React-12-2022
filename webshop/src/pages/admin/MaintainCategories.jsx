import { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import config from "../../data/config.json";

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => {
        setCategories(json || []);
        setLoading(false);
      });
  }, []);

  const addCategory = () => {
    categories.push({"name": categoryRef.current.value});
    fetch(config.categoriesDbUrl, {"method": "PUT", "body": JSON.stringify(categories)})
      .then(() => {
        setCategories(categories.slice());
        categoryRef.current.value = "";
      });
  }

  const deleteCategory = (index) => {
    categories.splice(index,1);
    fetch(config.categoriesDbUrl, {"method": "PUT", "body": JSON.stringify(categories)})
      .then(() => setCategories(categories.slice()));
  }

  if (isLoading === true) {
    return (<Spinner />)
  }

  return (
    <div>
      <label>Kategooria nimi</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={addCategory}>Sisesta uus kategooria</button> <br />
      {categories.map((element, index) => <div key={index}>{element.name} <button onClick={() => deleteCategory(index)}>x</button> </div> )}
    </div>
  )
}

export default MaintainCategories