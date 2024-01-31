import { FC, ReactChild } from "react";
import { Header } from "../Header/Header";

export const RootLayout: FC<{ children: ReactChild }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
