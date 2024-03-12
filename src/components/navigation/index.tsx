import DesktopNavigation from "./components/DesktopNavigation";
import MobileNavigation from "./components/MobileNavigation";
import { useDeviceResolution } from "../../hooks/useDeviceResolution";

const Navigation = () => {
  const isMobile = useDeviceResolution();

  return (
    <>
      {isMobile ? <MobileNavigation /> : <DesktopNavigation /> }
    </>
  );
};

export default Navigation;
