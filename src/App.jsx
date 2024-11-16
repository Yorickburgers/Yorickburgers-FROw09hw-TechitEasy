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
            <span className="categoryWrapper" id="bestSellingTV">
                <div className="category" id="image">
                    <img src={bestSellingTv.sourceImg} alt="image of bestselling tv"/>
                </div>
                <div className="category" id="bestSelling">
                    <p>{tvString(bestSellingTv)}</p>
                    <h3>{tvPrice(bestSellingTv)}</h3>
                    <p>{size(bestSellingTv)}</p>
                    <p>
                        <img src={check} alt="Check icon" style={{width: '15px', height: '15px'}}/> wifi
                        <img src={minus} alt="Minus icon" style={{width: '15px', height: '15px'}}/> speech
                        <img src={check} alt="Check icon" style={{width: '15px', height: '15px'}}/> hdr
                        <img src={check} alt="Check icon" style={{width: '15px', height: '15px'}}/> bluetooth
                        <img src={minus} alt="Minus icon" style={{width: '15px', height: '15px'}}/> ambiLight
                    </p>
                </div>
            </span>
            <h3>Beschikbare merken</h3>
            <span className="categoryWrapper">
               <ul>
                {inventory.map((tv) => {
                    return <li key={tv.type}>{tv.brand}</li>
                })}
                </ul>
            </span>
            <h3>Alle tvs</h3>
            <button type="button" onClick={() => buttonLog("Meest verkochte eerst")}>Meest verkocht eerst</button>
            <button type="button" onClick={() => buttonLog("Goedkoopste eerst")}>Goedkoopste eerst</button>
            <button type="button" onClick={() => buttonLog("Meest geschikt voor sport eerst")}>Meest geschikt voor sport
                eerst
            </button>
            <span className="categoryWrapper" id="allTvsWrapper">
                {inventory.map((tv) => {
                    return <><span className="categoryWrapper" id="allTV">
                <div className="category" id="image">
                    <img src={tv.sourceImg} alt={tvString(tv)}/>
                </div>
                <div className="category" id="bestSelling">
                    <p>{tvString(tv)}</p>
                    <h3>{tvPrice(tv)}</h3>
                    <p>{size(tv)}</p>
                    <p>
                        <img src={check} alt="Check icon" style={{width: '15px', height: '15px'}}/> wifi
                        <img src={minus} alt="Minus icon" style={{width: '15px', height: '15px'}}/> speech
                        <img src={check} alt="Check icon" style={{width: '15px', height: '15px'}}/> hdr
                        <img src={check} alt="Check icon" style={{width: '15px', height: '15px'}}/> bluetooth
                        <img src={minus} alt="Minus icon" style={{width: '15px', height: '15px'}}/> ambiLight
                    </p>
                </div>
            </span></>
                })};
            </span>
        </>
    )
}

export default App
