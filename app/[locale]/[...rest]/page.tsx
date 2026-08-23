import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('NotFoundPage');

    return {
        title: t("title"),
        robots: {
            index: false,
            follow: false,
            nocache: false,
            googleBot: {
                index: false,
                follow: false,
                noimageindex: true,
            }
        }
    }
}

export default function CatchAll() {
    notFound();
}