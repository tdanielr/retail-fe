import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavbarVendedor from './components/menu/NavbarVendedor';
import ListaProducto from "./components/producto/ListaProducto"
import CreateProducto from "./components/producto/CreateProducto"
import UpdateProducto from "./components/producto/UpdateProducto"
import ListaCategoria from './components/categoria/ListaCategoria';
import ListaProveedor from "./components/proveedores/ListaProveedor"

ReactDOM.render(
  <BrowserRouter>
    <NavbarVendedor></NavbarVendedor>
    <br></br>
    <div class="container">
      <Routes>
        <Route path="/productos/create" element={<CreateProducto />}></Route>
        <Route path="/productos/update/:id" element={<UpdateProducto />}></Route>
        <Route path="/productos" element={<ListaProducto />} ></Route>
        <Route path="/categorias" element={<ListaCategoria/>}></Route>
        <Route path="/proveedores" element={<ListaProveedor/>}></Route>
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);