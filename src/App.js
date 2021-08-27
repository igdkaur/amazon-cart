import { react } from '@babel/types';
import './App.css';
import CartItems from './Components/CartItems';
import CartTotal from './Components/CartTotal';
import Header from './Components/Header';
import data from './Data'
import {useState} from 'react';

function App() {

  const [cartItems, setCartItems ] =useState(data);
 

  return (
    <>
    <div className="App">
      <Header title ='Amazon Cart'/>
      <div className="App-main">
        <CartItems items={cartItems} setCartItems={setCartItems} />
      
        <CartTotal items={cartItems}/>
      </div>
    </div>
    </>
  );
}

export default App;
