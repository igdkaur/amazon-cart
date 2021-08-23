import './App.css';
import CartItems from './Components/CartItems';
import CartTotal from './Components/CartTotal';
import Header from './Components/Header';

function App() {
  return (
    <>
    <div className="App">
      <Header title ='Amazon Cart'/>
      <div className="App-main">
        <CartItems />
      
        <CartTotal />
      </div>
    </div>
    </>
  );
}

export default App;
