import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext/CartProvider';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import { MainLayout } from "./layouts/MainLayout"
import { AdminLayout } from "./layouts/AdminLayout"
import { Cart } from "./components/cart/Cart"
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer"
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida"
import { Login } from "./components/Login/Login"
import { Footer } from "./components/Footer/Footer"
import { Nav } from './components/Nav/Nav';

function App() {
  return (
   
      <BrowserRouter>
        <CartProvider>
            
            
            <Routes>
              <Route element={<MainLayout />}>
              <Route path="/" element={<ItemListContainer titulo={"Bievenidos"}/>} />
              <Route path="/category/:category" element={<ItemListContainer titulo={"Bienvenidos"} />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Login />} />
                
                <Route 
                  path="alta-productos"  
                  element={
                    <RutaProtegida>
                      <ProductFormContainer />
                    </RutaProtegida>
                  } 
                />
              </Route>
            </Routes>

          <Footer />
        </CartProvider>
      </BrowserRouter>
    
  );
}

export default App;
