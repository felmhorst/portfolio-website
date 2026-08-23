import React from "react";
import type { Metadata } from 'next'
import {getTranslations} from "next-intl/server";


export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('WorkPage');

    return {
        title: t("title"),
        alternates: {
            canonical: '/work',
            languages: {
                'en-US': '/en/work',
                'de-DE': '/de/work',
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
