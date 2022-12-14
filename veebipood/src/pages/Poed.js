import { useRef, useState } from "react";
import poedFailist from "../poed.json";

function Poed() {
  const [poed, uuendaPoed] = useState(poedFailist.slice());
  const poodRef = useRef(); // koos impordiga!
  const aegRef = useRef();

  const paneTagasi = () => {
    uuendaPoed(poedFailist.slice());
  }

  const sorteeriAZ = () => {
    // poed.sort();
    poed.sort((a, b) => a.nimi.localeCompare(b.nimi));
    uuendaPoed(poed.slice()); // []  --> array, list, massiiv    kui uuendan array'd useState funktsiooni abil
  }

  // a ----> vasakpoolne, b ----> parempoolne
  // .map() on tsükkel  1. <div>Kristiine   2. <div>Mustamäe   3. <div>Kesklinn   ........
  // .sort() on tsükkel    1.  Kristiine / Mustamäe    2.  Mustamäe / Kesklinn   3. Kesklinn  / Haabersti .....

  const sorteeriZA = () => {
    poed.sort((a, b) => b.nimi.localeCompare(a.nimi)); // ei tee default kasutusjuhtu
    uuendaPoed(poed.slice());
  }

  const sorteeriT2htedeJ2rjekorras = () => {
    poed.sort((a, b) => a.nimi.length - b.nimi.length); // ei tee default kasutusjuhtu
    uuendaPoed(poed.slice());
  }

  const sorteeriT2hedVastupidi = () => {
    poed.sort((a, b) => b.nimi.length - a.nimi.length); // ei tee default kasutusjuhtu
    uuendaPoed(poed.slice());
  }

  const sorteeriAZTeiseJ2rgi = () => {
    // poed.sort(); charAt  ---> character At   ja mingil numbril mis algab 0-st   Lasnamäe   0 - L, 1 - a, 2 - s
    poed.sort((a, b) => a.nimi.charAt(1).localeCompare(b.nimi.charAt(1)));
    uuendaPoed(poed.slice());
  }

  const filtreeriM2e = () => {
    const tulem = poed.filter(element => element.nimi.endsWith("mäe") === true);
    uuendaPoed(tulem);
  }

  const filtreeriLinn = () => {
    const tulem = poed.filter(element => element.nimi.includes("linn") === true);
    uuendaPoed(tulem);
  }

  const filtreeriT2heArv8 = () => {
    const tulem = poed.filter(element => element.nimi.length === 8);
    uuendaPoed(tulem);
  }

  const filtreeriT2heArvV2iksemKui7 = () => {
    const tulem = poed.filter(element => element.nimi.length <= 7);
    uuendaPoed(tulem);
  }

  const filtreeriKellelKolmasS = () => {
    const tulem = poed.filter(element => element.nimi.charAt(2) === "s"); //Lasnamäe   0 - L, 1 - a, 2 - s
    uuendaPoed(tulem);
  }

  // sort((a,b) => )   võrdle a-d ja b-d
  // filter(element => )  ütle kas on tõsi või mitte (tõe jätan alles)
  // map(element => ) ütle millega asendan igaühe

  const muudaK6ikiSuureks = () => {
                //  {n: "Kristiine", a: "9"}     {n: "KRISTIINE", a: "9"}      
    const tulem = poed.map(element => {return{"nimi":element.nimi.toUpperCase(), "aeg": element.aeg}});
    uuendaPoed(tulem);
  }

  const muudaK6ikiV2ikseks = () => {
                  //      Kristiine     kristiine
    const tulem = poed.map(element => {return{"nimi":element.nimi.toLowerCase(), "aeg": element.aeg}});
    uuendaPoed(tulem);
  }

  const muudaK6igileKriipsudEtte = () => {
    const tulem = poed.map(element => {return{"nimi": "--" + element.nimi, "aeg": element.aeg}});
    uuendaPoed(tulem);
  }

  const muudaK6igilePikkuseNrL6ppu = () => {
    const tulem = poed.map(element => {return{"nimi": element.nimi + element.nimi.length, "aeg": element.aeg}});
    uuendaPoed(tulem);
  }

  const muudaK6igileIAsemelO = () => {
    const tulem = poed.map(element => {return{"nimi": element.nimi.replaceAll("i", "o"), "aeg": element.aeg}});
    uuendaPoed(tulem);
  }

  const kustuta = (j2rjekorraNr) => {
    //     0            1           2            3
    // "Kristiine", "Mustamäe", "Kesklinn", "Haabersti", "Õismäe", "Lasnamäe", "Põhja-Tallinn", "Telliskivi", "Tallinna Keskus"
    poed.splice(j2rjekorraNr, 1); // esimene nr mitmendat kustutan, teine nr mitu tk kustutan
    uuendaPoed(poed.slice())  // slice() tekitab koopia, sulgude sisu jätan tühjaks
  }

  const lisa = () => {
    poed.push({"nimi": poodRef.current.value, "aeg": aegRef.current.value});
    uuendaPoed(poed.slice());
  }

  return (
    <div>
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
      </div>

      <label>Poe nimi</label> <br />
      <input ref={poodRef} type="text" /> <br />
      <label>Poe lahtiolekuaeg</label> <br />
      <input ref={aegRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />

{/* Warning: class=""   ----> className="" */}
      <div>{poed.length}</div>
      {poed.map((yksPood,index) => 
        <div key={index}>
          {index} {yksPood.nimi} {yksPood.aeg}
          {/* {{"keskus": "Kristiine"}.keskus}
          Kristiine */}
          <button onClick={() => kustuta(index)}>x</button> 
        </div>)}
      <div>---------------------------------</div>
      <div>Kristiine <button>x</button> </div>
      <div>Mustamäe <button>x</button> </div>
      <div>Kesklinn <button>x</button> </div>
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