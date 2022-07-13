import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LinkCart from './component/LinkCart';
import ApiContainer from './containers/ApiContainer';
import CartContainter from './containers/CartContainter';
import ItemDitailContainer from './containers/ItemDitailContainer';
import ProductListContainer from './containers/ProductListContainer'
import './styles/App.css';

function App() {

  return (
    <div className="App">
     <BrowserRouter>
        <section className='containers'>
        <LinkCart/>
          <Routes>
            <Route path='/' element={<ProductListContainer/>}/>            <Route path='/' element={<ProductListContainer/>}/>
            <Route path='/carrito/:idCart' element={<CartContainter/>}/>
            <Route path='/api' element={<ApiContainer/>}/>
            <Route path='/detalle/:id' element={<ItemDitailContainer/>}/>
            <Route path='/*' element={<Navigate to='/' replace />}/>
          </Routes>
        </section>
     </BrowserRouter>
    </div>
  );
}

export default App;
