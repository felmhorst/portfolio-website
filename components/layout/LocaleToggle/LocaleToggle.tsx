"use client";

import React from "react";
import styles from "./LocaleToggle.module.css";
import {useLocale} from "next-intl";
import {setLocale} from "@/utility/setLocale";

export const LocaleToggle = () => {

    return (
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
    )
};

export const LocaleButton = ({
    label,
    locale,
}: {
    label: string;
    locale: string;
}) => {
    const currentLocale = useLocale();
    const isActive = currentLocale === locale;

    return (
        <li className={styles.li}>
            <button
                onClick={() => setLocale(locale)}
                className={`${styles.button} ${isActive ? styles.button__active : ""}`}>
                {label}
            </button>
        </li>
    )
}