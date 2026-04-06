import type { Metadata } from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";
import React from "react";
import {Header} from "@/components/layout/Header/Header";
import {Footer} from "@/components/layout/Footer/Footer";
import {Cursor} from "@/components/Cursor/Cursor";
import {NextIntlClientProvider} from "next-intl";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"]
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Florian Elmhorst - Portfolio",
  description: "interaction designer & web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" prefix={"og:http//ogp.me/ns#"}>
      <body className={`${roboto.variable} ${playfairDisplay.variable}`}>
        <NextIntlClientProvider>
          <Cursor/>
          <Header/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
