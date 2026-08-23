import React from "react";
import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('AboutPage');

  return {
    title: t("title"),
    alternates: {
      canonical: '/about',
      languages: {
        'en-US': '/en/about',
        'de-DE': '/de/about',
      },
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (children);
}
