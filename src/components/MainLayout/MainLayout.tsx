import React from "react";
import { MainLayoutProps } from "./MainLayout.interface";

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};
