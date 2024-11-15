import './App.css';
import {soldTV} from './helpers/sold.js'
import {boughtTV} from './helpers/bought.js'
import toSell from './helpers/sell.js'
import tvString from './helpers/tvStringGenerator.js'
import tvPrice from './helpers/priceStringGenerator.js'
import {size} from './helpers/sizeStringGenerator.js'
import {bestSellingTv, inventory} from './constants/inventory.js'
import check from './assets/check.png'
import minus from './assets/minus.png'
import {buttonLog} from "./helpers/button.js";

function App() {
  return (
      <>
          <h1>Tech it easy dashboard</h1>
          <h3>Verkoopoverzicht</h3>
          <span className="categoryWrapper">
        <div className="category" id="sold">
          <p>Aantal verkochte producten</p>
          <p>{soldTV()}</p>
        </div>
        <div className="category" id="stock">
          <p>Aantal ingekochte producten</p>
          <p>{boughtTV()}</p>
        </div>
        <div className="category" id="toSell">
          <p>Aantal te verkopen producten</p>
          <p>{toSell()}</p>
        </div>
      </span>
          <h3>Best verkochte tv</h3>
          <div className="categoryWrapper" id={"bestSellingTV"}>
              <div className="category" id="image">
                  <img src={bestSellingTv.sourceImg} alt="image of bestelling tv"/>
              </div>
              <div className="category" id="bestSelling">
                  <p>{tvString()}</p>
                  <h3>{tvPrice()}</h3>
                  <p>{size()}</p>
                  <p>
                      <img src={check} alt="Check icon" style={{width: '20px', height: '20px'}}/> wifi
                      <img src={minus} alt="Minus icon" style={{width: '20px', height: '20px'}}/> speech
                      <img src={check} alt="Check icon" style={{width: '20px', height: '20px'}}/> hdr
                      <img src={check} alt="Check icon" style={{width: '20px', height: '20px'}}/> bluetooth
                      <img src={minus} alt="Minus icon" style={{width: '20px', height: '20px'}}/> ambilight
                  </p>
              </div>
          </div>
          <button type="button" onClick={() => buttonLog("Meest verkochte eerst")}>Meest verkocht eerst</button>
          <button type="button" onClick={() => buttonLog("Goedkoopste eerst")}>Goedkoopste eerst</button>
          <button type="button" onClick={() => buttonLog("Meest geschikt voor sport eerst")}>Meest geschikt voor sport eerst</button>

          <ul>
              {inventory.map((tv) => {
                  return <li key={tv.type}>{tv.brand}</li>
              })}
          </ul>
      </>
  )
}

export default App
