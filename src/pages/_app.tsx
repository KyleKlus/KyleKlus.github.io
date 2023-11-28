/** @format */
// Info: uncomment if you want to use firebase
// 'use client';
// import AuthProvider from 'templates/context/AuthContext';
// import DataBaseProvider from 'templates/context/DatabaseContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style
        jsx
        global
      >{`
        html {
          font-family: ${firaCode.style.fontFamily};
        }
      `}</style>
      {/* <AuthProvider>
        <DataBaseProvider> */}
          <Component {...pageProps} />
        {/* </DataBaseProvider>
      </AuthProvider> */}
    </>
  );
}
