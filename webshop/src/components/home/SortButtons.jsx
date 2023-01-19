
function SortButtons(props) {

  const sortAZ = () => {
    props.products.sort((a, b) => a.name.localeCompare(b.name));
    props.setProducts(props.products.slice());
  }

  const sortZA = () => {
    props.products.sort((a, b) => b.name.localeCompare(a.name));
    props.setProducts(props.products.slice());
  }

  const sortPriceAsc = () => {
    props.products.sort((a, b) => a.price - b.price);
    props.setProducts(props.products.slice());
  }

  const sortPriceDesc = () => {
    props.products.sort((a, b) => b.price - a.price);
    props.setProducts(props.products.slice());
  }

  const sortDateAsc = () => {
    props.products.sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf());
    props.setProducts(props.products.slice());
  }

  const sortDateDesc = () => {
    props.products.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
    props.setProducts(props.products.slice());
  }

  return (
    <div>
      <button onClick={sortAZ}>Sorteeri A-Z</button>
      <button onClick={sortZA}>Sorteeri Z-A</button>
      <button onClick={sortPriceAsc}>Hind kasvavalt</button>
      <button onClick={sortPriceDesc}>Hind kahanevalt</button>
      <button onClick={sortDateAsc}>Sorteeri hiljem lisatud enne</button>
      <button onClick={sortDateDesc}>Sorteeri varem lisatud enne</button>
    </div>
  )
}

export default SortButtons