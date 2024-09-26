import { useState } from "react";
import { FilterValuesType, MoneyType } from "./App";
import { Button } from "./components/Button";


type PropsType = {
  money: Array<MoneyType>
};

export const Filter = ({money}: PropsType) => {
    const [filter, setFilter] = useState<FilterValuesType>("all");

  let currentMoney = money;

  if (filter === 'ruble') {
    currentMoney = money.filter(currentMoney => currentMoney.banknote === 'ruble')
  }

  if (filter === 'dollar') {
    currentMoney = money.filter(currentMoney => currentMoney.banknote === 'dollar')
  }

  const onClickFilterHandler = (nameButton: FilterValuesType) => {
    setFilter(nameButton);
  };

  return (
    <div style={{marginLeft: 20}}>
      <ul style={{paddingLeft: 0, listStyle: 'none'}}>
          {currentMoney.map((objFromMoneyArr, index) => {
            return(
              <li key={index}>
                <span>{objFromMoneyArr.banknote} </span>
                <span>{objFromMoneyArr.nominal} </span>
                <span>{objFromMoneyArr.number} </span>
              </li>
              )
          })}
      </ul>
      <Button name="all" callBack={() => onClickFilterHandler('all')} />
      <Button name="Ruble" callBack={() => onClickFilterHandler('ruble')} />
      <Button name="Dollar" callBack={() => onClickFilterHandler('dollar')} />
    </div>
  );
};