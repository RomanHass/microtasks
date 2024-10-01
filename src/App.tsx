import React, { useState } from 'react';
import './App.css';
import { FullInput } from './components/FullInput';
import { Input } from './components/Input';
import { Btn } from './components/Btn';

export type FilterValuesType = 'all' | 'ruble' | 'dollar';

export type MoneyType = {
  banknote: string
  nominal: number
  number: string
};

function App() {

  const [message, setMessage] = useState([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'},
    {message: 'message4'},
  ])

  const [title, setTitle] = useState<string>('');

  const addMessage = (title: string) => {
    let newMessage = {message: title};
    setMessage([newMessage, ...message]);
  };

  const callBackButtonHandler = () => {
    addMessage(title)
    setTitle('');
  };

  return (
    <div className="App">

      {/* <FullInput addMessage={addMessage}/> */}

      <Input title={title} setTitle={setTitle} />
      <Btn title="+" callBack={callBackButtonHandler} />

      {message.map((el, index) => {
        return (
          <div key={index}>{el.message}</div>
        )
      })}
    </div>
  );
}

export default App;
