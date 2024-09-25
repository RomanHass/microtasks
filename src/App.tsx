import React, {MouseEvent} from 'react';
import './App.css';
import { Button } from './components/Button';

function App() {

  // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //   console.log("Hello, I'm Roman");
  // };

  // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //   console.log("Hello, I'm Ivan");
  // };

  // const onClickHandler = (name: string) => {
  //   console.log(`Hello my name is ${name}`);
  // };

  // const foo1 = () => {
  //   console.log(100200);
  // };
  
  // const foo2 = (num: number) => {
  //   console.log(num);
  // };

  const Button1Foo = (subscriber: string, age: number) => {
    console.log(subscriber, age);
  };

  const Button2Foo = (subscriber: string) => {
    console.log(subscriber)
  };

  const StupidButton = () => {
    console.log("I'm a stupid button");
  };

  return (
    <div className="App">
      {/* <button onClick={() => {console.log('Hello')}}>MyYouTubeChannel-1</button> */}
      {/* <button onClick={() => onClickHandler("Roman")}>MyYouTubeChannel-1</button> */}
      {/* <button onClick={() => onClickHandler("Ivan")}>MyYouTubeChannel-2</button> */}

      {/* <button onClick={foo1}>1</button> */}
      {/* <button onClick={() => foo2(100200)}>2</button> */}


      {/* <button>MyYouTubeChannel-1</button> */}
      <Button name="MyYouTubeChannel-1" callBack={() => Button1Foo("Roman", 21)} />
      {/* <button>MyYouTubeChannel-2</button> */}
      <Button name="MyYouTubeChannel-2" callBack={() => Button2Foo("Ivan")} />

      <Button name="I'm a stupid button" callBack={StupidButton}/>

    </div>
  );
}

export default App;
