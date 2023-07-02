import { useState } from 'react'
import './App.css'
import Header from './component/header'
import Product from "./pages/Product/Products";

function App() {
  console.log("In Main");
  return (
    <>
      <Header />
      <Product />
    </>
  );
}

export default App
