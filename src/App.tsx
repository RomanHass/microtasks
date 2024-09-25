import React, { useState } from 'react';
import './App.css';

function App() {

  // let a = 1;

  let [a, setA] = useState<number>(1);

  const onClickHandler = () => {
    setA(++a);
  };

  const onClickResetHandler = () => {
    setA(0);
  };

  return (
    <div className="App">
      <h1>{a}</h1>
      <button onClick={onClickHandler}>number</button>
      <button onClick={onClickResetHandler}>0</button>
    </div>
  );
}

export default App;
