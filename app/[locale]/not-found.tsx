import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {useTranslations} from "next-intl";
import styles from "./not-found.module.css";

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
            },
        },
    }
}

export default function NotFound() {
    const t = useTranslations("NotFoundPage");

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.heading}>
                    {t("heading")}
                </h1>
                <p>{t("description")}</p>
            </div>
        </div>
    );
}
