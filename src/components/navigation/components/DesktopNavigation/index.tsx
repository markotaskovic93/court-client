import LangSwitcher from "../../../langSwitcher";
import Nav from "./components/Nav";

const DesktopNavigation = () => (
  <div className="w-full bg-black">
    <div className="relative flex w-full xl:w-3/4 justify-center mx-auto p-2 xl:p-4">
      <Nav className="flex md:text-base space-x-10 items-center font-bold text-white"/>
      <LangSwitcher className="absolute top-0 right-0" /> 
    </div>
  </div>
);

export default DesktopNavigation;
