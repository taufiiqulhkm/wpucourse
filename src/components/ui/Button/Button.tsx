import { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  type?: "submit" | "button";
}

const Button = (props: PropTypes) => {
  const { children,type = 'button' } = props;
  return <button type={type}>{children}</button>;
};

export default Button;
