import React from "react";
import tw from "twin.macro";

export interface LayoutProps {
  children: React.ReactNode;
}

const Main = tw.main`box-border flex font-sans items-center bg-gray-600 justify-center h-screen`;

const GlobalLayout = (props: LayoutProps) => {
  return <Main>{props.children}</Main>;
};
export default GlobalLayout;
