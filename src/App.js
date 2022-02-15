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

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <header className="App-header">
          <NavBar logo={logo} />
        </header>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/:category/:id" element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
