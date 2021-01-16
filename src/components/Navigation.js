import React from "react";
import DesktopNavigation from "./DesktopNavigation";
import { useMediaQuery } from "react-responsive";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return <>{isTabletOrMobile ? <MobileNavigation /> : <DesktopNavigation />}</>;
};

export default Navigation;
