type BodyPropsType = {
  title: string
};

export const Body = (props: BodyPropsType) => {
  return (
    <main>{props.title}</main>
  );
};