type HeaderPropsType = {
  title: string
};

export const Header = (props: HeaderPropsType) => {
  return (
    <header>{props.title}</header>
  );
};