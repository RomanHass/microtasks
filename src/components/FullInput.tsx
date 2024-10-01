import { ChangeEvent, useState } from "react";

type PropsType = {
  addMessage: (title: string) => void
};

export const FullInput = ({addMessage}: PropsType) => {

  const [title, setTitle] = useState<string>('');

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const onClickButtonHandler = () => {
    addMessage(title);
    setTitle('');
  }

  return (
    <div>
      <input  value={title}
              onChange={onChangeInputHandler} />
      <button onClick={onClickButtonHandler}>+</button>
    </div>
  );
};