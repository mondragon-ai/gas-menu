import logo from './assets/img/logo/Gas-Main-Logo-v1.png';
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import Home from './Screens/Home'
import NavBar from './components/nav/navBar';
import ProductDetail from './Screens/ProductDetail';
import QRReeader from './components/qr/QRReeader';
import FilterMenu from './components/menu/FilterMenu';
import { useState } from 'react';

function App() {

  const [isOpen, toggleFilter] = useState('container filter-open');

  return (
    <div className="App">

      <BrowserRouter>
        <FilterMenu isOpen={isOpen} toggleFilter={toggleFilter} />
        <header className="App-header">
          <NavBar toggleFilter={toggleFilter} logo={logo} />
        </header>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/:category/:id" element={<ProductDetail />}></Route>
          <Route path="/scan" exact element={<QRReeader />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
