"use client";

import { usePathname } from "next/navigation";


const NavbarWrapper = ({ children }) => {

  const pathName = usePathname();

  if (pathName.startsWith("/sign-in") || pathName.startsWith("/sign-up")) {

    return null;

  }

  return children;

};


export default NavbarWrapper;
