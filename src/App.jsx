import './App.css';
import {soldTV} from './helpers/sold.js'
import {boughtTV} from './helpers/bought.js'
import toSell from './helpers/sell.js'

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
    </>
  )
}

export default App
