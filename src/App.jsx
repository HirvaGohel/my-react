import { useDispatch } from 'react-redux';
import Header from './Header';
import './App.css';
import { clearAllItem } from './redux/slice';
import Product from './product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartList from './CartList';

function App() {
const dispatch=useDispatch();
  return (
    <>
  <BrowserRouter>
    <Header/>
 
    <Routes>
      <Route path="/" element={ <Product/>}></Route>
      <Route path="/cart" element={ <CartList/>}></Route>
      
    </Routes>  
  </BrowserRouter>
    </>
  )
}

export default App;


