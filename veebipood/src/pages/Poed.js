import { useState } from "react";

function Poed() {
  const [poed, uuendaPoed] = useState(["Kristiine", "Mustamäe", "Kesklinn", "Haabersti", "Õismäe", "Lasnamäe", "Põhja-Tallinn", "Telliskivi", "Tallinna Keskus"]);

  const paneTagasi = () => {
    uuendaPoed(["Kristiine", "Mustamäe", "Kesklinn", "Haabersti", "Õismäe", "Lasnamäe", "Põhja-Tallinn", "Telliskivi", "Tallinna Keskus"]);
  }

  const sorteeriAZ = () => {
    poed.sort();
    // poed.sort((a, b) => a.localeCompare(b));
    uuendaPoed(poed.slice()); // []  --> array, list, massiiv    kui uuendan array'd useState funktsiooni abil
  }

  // a ----> vasakpoolne, b ----> parempoolne
  // .map() on tsükkel  1. <div>Kristiine   2. <div>Mustamäe   3. <div>Kesklinn   ........
  // .sort() on tsükkel    1.  Kristiine / Mustamäe    2.  Mustamäe / Kesklinn   3. Kesklinn  / Haabersti .....

  const sorteeriZA = () => {
    poed.sort((a, b) => b.localeCompare(a)); // ei tee default kasutusjuhtu
    uuendaPoed(poed.slice());
  }

  const sorteeriT2htedeJ2rjekorras = () => {
    poed.sort((a, b) => a.length - b.length); // ei tee default kasutusjuhtu
    uuendaPoed(poed.slice());
  }

  const sorteeriT2hedVastupidi = () => {
    poed.sort((a, b) => b.length - a.length); // ei tee default kasutusjuhtu
    uuendaPoed(poed.slice());
  }

  const sorteeriAZTeiseJ2rgi = () => {
    // poed.sort(); charAt  ---> character At   ja mingil numbril mis algab 0-st   Lasnamäe   0 - L, 1 - a, 2 - s
    poed.sort((a, b) => a.charAt(1).localeCompare(b.charAt(1)));
    uuendaPoed(poed.slice());
  }

  const filtreeriM2e = () => {
    const tulem = poed.filter(element => element.endsWith("mäe") === true);
    uuendaPoed(tulem);
  }

  const filtreeriLinn = () => {
    const tulem = poed.filter(element => element.includes("linn") === true);
    uuendaPoed(tulem);
  }

  const filtreeriT2heArv8 = () => {
    const tulem = poed.filter(element => element.length === 8);
    uuendaPoed(tulem);
  }

  const filtreeriT2heArvV2iksemKui7 = () => {
    const tulem = poed.filter(element => element.length <= 7);
    uuendaPoed(tulem);
  }

  const filtreeriKellelKolmasS = () => {
    const tulem = poed.filter(element => element.charAt(2) === "s"); //Lasnamäe   0 - L, 1 - a, 2 - s
    uuendaPoed(tulem);
  }

  // sort((a,b) => )   võrdle a-d ja b-d
  // filter(element => )  ütle kas on tõsi või mitte (tõe jätan alles)
  // map(element => ) ütle millega asendan igaühe

  const muudaK6ikiSuureks = () => {
    const tulem = poed.map(element => element.toUpperCase());
    uuendaPoed(tulem);
  }

  const muudaK6ikiV2ikseks = () => {
    const tulem = poed.map(element => element.toLowerCase());
    uuendaPoed(tulem);
  }

  const muudaK6igileKriipsudEtte = () => {
    const tulem = poed.map(element => "--" + element);
    uuendaPoed(tulem);
  }

  const muudaK6igilePikkuseNrL6ppu = () => {
    const tulem = poed.map(element => element + element.length);
    uuendaPoed(tulem);
  }

  const muudaK6igileIAsemelO = () => {
    const tulem = poed.map(element => element.replaceAll("i", "o"));
    uuendaPoed(tulem);
  }

  return (
    <div>
      <button onClick={paneTagasi}>Pane tagasi originaalsed</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriT2htedeJ2rjekorras}>Sorteeri tähtede arvu järgi kasvavalt</button>
      <button onClick={sorteeriT2hedVastupidi}>Sorteeri tähtede arvu järgi kahanevalt</button>
      <button onClick={sorteeriAZTeiseJ2rgi}>Sorteeri teise tähe järgi kasvavalt</button>
      <button onClick={filtreeriM2e}>Jäta alles vaid "mäe"-ga lõppevad</button>
      <button onClick={filtreeriLinn}>Jäta alles vaid "linn" sisaldavad</button>
      <button onClick={filtreeriT2heArv8}>Jäta alles kellel tähemärke 8</button>
      <button onClick={filtreeriT2heArvV2iksemKui7}>Jäta alles kellel tähemärke vähem kui 7</button>
      <button onClick={filtreeriKellelKolmasS}>Jäta alles kellel kolmas täht "s"</button>
      <button onClick={muudaK6ikiSuureks}>Muuda kõik suurteks tähtedeks</button>
      <button onClick={muudaK6ikiV2ikseks}>Muuda kõik väikseks tähtedeks</button>
      <button onClick={muudaK6igileKriipsudEtte}>Muuda kriipsud ette</button>
      <button onClick={muudaK6igilePikkuseNrL6ppu}>Muuda number lõppu</button>
      <button onClick={muudaK6igileIAsemelO}>Muuda i asemel o</button>


      <div>{poed.length}</div>
      {poed.map((yksPood,index) => <div key={index}>{yksPood}</div>)}
      <div>---------------------------------</div>
      <div>Kristiine</div>
      <div>Mustamäe</div>
      <div>Kesklinn</div>
      <div>Haabersti</div>
      <div>Õismäe</div>
      <div>Lasnamäe</div>
      <div>Põhja-Tallinn</div>
      <div>Telliskivi</div>
      <div>---------------</div>
      <div>BMW</div>
      <div>Audi</div>
      <div>Mercedes</div>
      <div>{["BMW", "Audi", "Mercedes"].length}</div>
      {["BMW", "Audi", "Mercedes"].map((auto,i) => <div key={i}>{auto}</div>)}
    </div>
  )
}

export default Poed