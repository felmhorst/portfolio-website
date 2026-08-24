import type {Metadata, Viewport} from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import "../globals.css";
import React from "react";
import {notFound} from "next/navigation";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {routing} from "@/i18n/routing";
import {Header} from "@/components/layout/Header/Header";
import {Footer} from "@/components/layout/Footer/Footer";
import {Cursor} from "@/components/animations/Cursor/Cursor";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"]
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    template: "%s | Florian Elmhorst",
    default: "Florian Elmhorst"
  },
  description: "interaction designer & web developer",
  keywords: "web developer, portfolio, Florian Elmhorst, frontend developer",
  generator: "Next.js",

  // urls
  metadataBase: new URL('https://felmhorst.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'de-DE': '/de',
    },
  },

  // socials
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://felmhorst.com',
    title: 'Florian Elmhorst',
    description: 'interaction designer & web developer',
    siteName: 'Portfolio - Florian Elmhorst',
    images: [
      {
        url: 'https://felmhorst.com/og-image.png',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Florian Elmhorst',
    description: 'interaction designer & web developer',
  },

  // robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a20" },
  ],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} prefix={"og:http//ogp.me/ns#"}>
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
