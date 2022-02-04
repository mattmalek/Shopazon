import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
      <header className="row">
          <div>
              <a className="brand" href="/">Shopazon</a>
          </div>
          <div>
              <a href="/cart">My Cart</a>
              <a href="/signin">Sign In</a>
          </div>
      </header>
      <main>
        <Routes>
          <Route path="/cart/:id" element={<CartScreen/>}></Route>
          <Route path="/cart" element={<CartScreen/>}></Route>
          <Route path="/product/:id" element={<ProductScreen/>}></Route>
          <Route path="/" element={<HomeScreen/>} exact></Route>
        </Routes>
      </main>
      <footer className="row center">
          All rights reserved. 
      </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
