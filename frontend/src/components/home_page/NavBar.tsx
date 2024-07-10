import React from "react";
import {
  NavBarButton1,
  NavBarButton2,
  NavBarButton3,
} from "@/components/home_page/sub_components/NavBarButtons";

function NavBar() {
  return (
    <nav className="absolute w-full h-16 z-10 backdrop-contrast-125">
      <div className="w-full h-full flex items-center justify-center gap-x-3">
        <NavBarButton1 />
        <NavBarButton2 />
        <NavBarButton3 />
      </div>
    </nav>
  );
}

export default NavBar;
