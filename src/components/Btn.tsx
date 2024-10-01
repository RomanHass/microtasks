type PropsType = {
  title: string
  callBack: () => void
}

export const Btn = (props: PropsType) => {

  const onClickBtnHandler = () => {
    props.callBack();
  };

  return (
    <button onClick={onClickBtnHandler}>{props.title}</button>
  );
};