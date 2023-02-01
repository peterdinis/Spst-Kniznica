import React from "react";
import Seo from "./Seo";
import Navbar from "./Navbar";

interface ILayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({children}: ILayoutProps) => {
    return (
        <>
         <Seo />
         <Navbar />
         {children}
        </>
    )
}

export default Layout