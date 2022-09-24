
import { useState } from 'react';
import './App.css';
import AllGun from './Components/AllGun/AllGun';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const increaseCart = () => {
    setCount(count + 1);
  }



  return (
    <div className="App">
      <Navbar count={count}></Navbar>
      <AllGun increaseCart={increaseCart} />
    </div>
  );
}

export default App;
