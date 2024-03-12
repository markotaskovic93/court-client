import { PropsWithChildren } from "react";
import Footer from "../components/footer";
import Navigation from "../components/navigation"

const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="w-full">
    <Navigation />
    { children }
    <Footer />
  </div>
);

export default HomeLayout;
