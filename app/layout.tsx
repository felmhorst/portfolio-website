import type {Metadata, Viewport} from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";
import React from "react";
import {Cursor} from "@/components/animations/Cursor/Cursor";
import {getLocale} from "next-intl/server";

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
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang={await getLocale()} prefix={"og:http//ogp.me/ns#"}>
        <body className={`${roboto.variable} ${playfairDisplay.variable}`}>
            <Cursor/>
            {children}
        </body>
        </html>
    );
}
