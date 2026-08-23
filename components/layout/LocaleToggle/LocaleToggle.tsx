"use client";

import React from "react";
import styles from "./LocaleToggle.module.css";
import {useLocale} from "next-intl";
import {Link, usePathname} from "@/i18n/navigation";
import {AnimateChildren} from "@/components/animations/AnimateChildren";
import {Reveal} from "@/components/animations/Reveal";
import {Direction} from "@/utility/types";

export const LocaleToggle = () => {

    return (
        <AnimateChildren delay={1.6}>
            <div className={styles.container}>
                <ul className={styles.ul}>
                    <LocaleButton
                        label={"DE"}
                        locale={"de"}/>
                    <LocaleButton
                        label={"EN"}
                        locale={"en"}/>
                </ul>
            </div>
        </AnimateChildren>
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
                locale={locale}
                aria-current={isActive ? "page" : undefined}
                className={`${styles.button} ${isActive ? styles.button__active : ""}`}>
                {label}
            </Link>
        </li>
    )
}
