import { ReactNode } from "react";
import Navigation from "../components/navigation"

type Props = {
  leftSide: ReactNode;
  central: ReactNode;
}

const ProductLayout: React.FC<Props> = ({ 
  leftSide,
  central
}) => (
  <div>
    <Navigation />
    <div className="flex w-3/4 h-10 mx-auto bg-red ">
      <div className="w-1/4 h-fit bg-slate-400">
        { leftSide }
      </div>
      <div className="w-/3-4 h-fit bg-slate-700">
        { central }
      </div>
    </div>
  </div>
);

export default ProductLayout;