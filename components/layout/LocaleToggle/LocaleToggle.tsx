"use client";

import React from "react";
import styles from "./LocaleToggle.module.css";
import {useLocale} from "next-intl";
import {Link, usePathname} from "@/i18n/navigation";

export const LocaleToggle = ({
    isOpen = false,
}: {
    isOpen?: boolean;
}) => {

    return (
        <div className={`${styles.container} ${isOpen ? styles.container__open : ""}`}>
            <ul className={styles.ul}>
                <LocaleButton
                    label={"DE"}
                    locale={"de"}/>
                <LocaleButton
                    label={"EN"}
                    locale={"en"}/>
            </ul>
        </div>
    )
};

export const LocaleButton = ({
    label,
    locale,
}: {
    label: string;
    locale: "en" | "de";
}) => {
    const currentLocale = useLocale();
    const pathname = usePathname();
    const isActive = currentLocale === locale;

    return (
        <li className={styles.li}>
            <Link
                href={pathname}
                hrefLang={locale}
                locale={locale}
                aria-current={isActive ? "page" : undefined}
                className={`${styles.button} ${isActive ? styles.button__active : ""}`}>
                {label}
            </Link>
        </li>
    )
}
