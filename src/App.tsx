import React, { useState } from 'react';
import './App.css';
import { Filter } from './Filter';

export type FilterValuesType = 'all' | 'ruble' | 'dollar';

export type MoneyType = {
  banknote: string
  nominal: number
  number: string
};

function App() {

  const [money, setMoney] = useState<Array<MoneyType>>([
    {banknote: "dollar", nominal: 100, number: "a123456789"},
    {banknote: "dollar", nominal: 50, number: "b123456789"},
    {banknote: "ruble", nominal: 100, number: "c123456789"},
    {banknote: "dollar", nominal: 100, number: "d123456789"},
    {banknote: "dollar", nominal: 50, number: "e123456789"},
    {banknote: "ruble", nominal: 100, number: "f123456789"},
    {banknote: "dollar", nominal: 50, number: "j123456789"},
    {banknote: "ruble", nominal: 50, number: "h123456789"}
  ]);

  return (
    <div className='App'>
      <Filter money={money} />
    </div>
  );
}

export default App;
