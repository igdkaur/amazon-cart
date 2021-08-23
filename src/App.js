import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <>
    <div className="App">
      <Header title ='Amazon Cart'/>
      <div className="App-main">
        <div className="CartItems">
          <h1>Shopping Cart</h1>
        </div>
        <div className="CartTotal">
        
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
