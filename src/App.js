/* import logo from './logo.svg'; */
import './App.css';

import {BrowserRouter, Route} from "react-router-dom"

import Header from "./Header.js"
import Peliculas from "./peliculas.js"
import Portada from "./portada.js"


function App() {

  return(<BrowserRouter>
  <Header/>
  <Route exact path="/">
<div><p>Banner</p></div>
<div><Portada/></div>
  </Route>
  <Route exact path="/ropa">
<div><p>Ropa</p></div>
  </Route>
  <Route exact path="/zapatillas">
<div><p>Zapatillas</p></div>
  </Route>
  <Route exact path="/peliculas">
<div><Peliculas/></div>
  </Route>
  <Route exact path="/libros">
<div><p>Libros</p></div>
  </Route>
  <Route exact path="/gammer">
<div><p>Videojuegos</p></div>
  </Route>
  
  </BrowserRouter>)
  
}

export default App;


/* https://rapidapi.com/collection/how-to-get-amazon-product-reviews-api */
/* https://rapidapi.com/collection/amazon-products */
/* https://rapidapi.com/blog/email-apis-which-one-is-right-for-you/ */
/* https://blog.api.rakuten.net/top-retail-product-apis/ */