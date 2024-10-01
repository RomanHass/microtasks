import { ChangeEvent } from "react";

type PropsType = {
  title: string
  setTitle: (title: string) => void
}

export const Input = (props: PropsType) => {

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setTitle(event.currentTarget.value);
  };

  return (
    <input  value={props.title}
            onChange={onChangeInputHandler} />
  );
};