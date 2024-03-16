import { FC, ReactChild, useEffect, useRef } from "react";
import { Header } from "../Header/Header";

import '@/app/styles/main.scss'
import Head from "next/head";

export const RootLayout: FC<{ children: ReactChild, title: string, description?: string }> = ({ children, title, description }) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description}/>}
      
      </Head>
      <>
      <Header />
      <main>{children}</main>
      </>
      
    </>
      
  );
};
