import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Componentes Requeridos 
import Nav from './components/Nav/Nav'; // Usamos Nav en lugar de Header/Footer
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

// **OBLIGATORIO: El Contexto del Carrito**
import { CartProvider } from './context/CartProvider';

function App() {
return (
    // **1. El Proveedor de Contexto debe envolver todo**
    <CartProvider> 
      <BrowserRouter>
        
        {/* Usamos Nav, FUERA de Routes */}
        <Nav /> 

        <Routes>
          {/* 1. Ruta principal (Todos los productos) */}
          <Route 
            path="/" 
            element={<ItemListContainer greeting="¡Bienvenido/a!" />} 
          />

          {/* **2. RUTA OBLIGATORIA: Filtrado por Categoría** */}
          <Route 
            path="/categoria/:categoryId" 
            element={<ItemListContainer greeting="Productos Filtrados" />} 
          />

          {/* 3. Ruta de Detalle (Usamos :itemId para ser consistentes con la guía general) */}
          <Route 
            path="/detalle/:itemId" 
            element={<ItemDetailContainer />} 
          />
          
          {/* 4. Ruta 404 */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}
export default App
