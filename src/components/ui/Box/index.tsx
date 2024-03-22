import { PropsWithChildren } from "react";

type Props = {
  className?: string;
}

const Box: React.FC<PropsWithChildren<Props>> = ({
  children,
  className
}) => (
  <div className={className}>
    { children }
  </div>
);

export default Box;
