import { useEffect, useRef, useState } from 'react'
import config from "../../data/config.json";

function MaintainShops() {
  const [shops, setShops] = useState([]);
  const shopRef = useRef();
  const openTimeRef = useRef();
  const closingTimeRef = useRef();
  const cityRef = useRef();
  const xCoordRef = useRef();
  const yCoordRef = useRef();

  useEffect(() => {
    fetch(config.shopsDbUrl)
      .then(res => res.json())
      .then(json => setShops(json || []));
  }, []);

  const addShops = () => {
    const newShop = { 
      "name": shopRef.current.value, 
      "openTime": openTimeRef.current.value, 
      "closingTime": closingTimeRef.current.value, 
      "city": cityRef.current.value, 
      "xCoord": xCoordRef.current.value,
      "yCoord": yCoordRef.current.value 
    }
    shops.push(newShop);
    fetch(config.shopsDbUrl, { "method": "PUT", "body": JSON.stringify(shops) })
      .then(() => {
        setShops(shops.slice());
        shopRef.current.value = "";
        openTimeRef.current.value = "";
        closingTimeRef.current.value = "";
        cityRef.current.value = "";
        xCoordRef.current.value = "";
        yCoordRef.current.value = "";
      });
  }

  const deleteShop = (index) => {
    shops.splice(index, 1);
    fetch(config.shopsDbUrl, { "method": "PUT", "body": JSON.stringify(shops) })
      .then(() => setShops(shops.slice()));
  }

  return (
    <div>
      <label>Shop name</label><br />
      <input ref={shopRef} type="text" /><br />
      <label>Open time</label><br />
      <input ref={openTimeRef} type="time" /><br />
      <label>Closing time</label><br />
      <input ref={closingTimeRef} type="time" /><br />
      <label>City</label><br />
      <input ref={cityRef} placeholder="Tallinn" type="text" /><br />
      <label>Longitude</label><br />
      <input ref={xCoordRef} placeholder="58.8243" type="text" /><br />
      <label>Latitude</label><br />
      <input ref={yCoordRef} placeholder="24.1231" type="text" /><br />
      <button onClick={addShops}>Add new shop</button><br /><br />
      {shops.map((element, index) => <div key={index}>
        <div>{element.name}</div>
        <div>{element.openTime}</div>
        <div>{element.closingTime}</div>
        <div>{element.city}</div>
        <div>{element.xCoord}</div>
        <div>{element.yCoord}</div>
        <button onClick={() => deleteShop(index)}>X</button></div>)}
    </div>

  )
}

export default MaintainShops