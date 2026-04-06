"use client";
import React from "react";
import styles from "./NavigationBar.module.css";
import Link, {LinkProps} from "next/link";
import {usePathname} from "next/navigation";
import {useTranslations} from "next-intl";

export const NavigationBar = () => {
    const t = useTranslations("Nav");

    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <NavigationItem href={"/work"}>
                    {t("projects")}
                </NavigationItem>
                <NavigationItem href={"/about"}>
                    {t("about")}
                </NavigationItem>
            </ul>
        </nav>
    );
};

export const NavigationItem = ({
    children,
    href,
} : {
    children: React.ReactNode;
    href: LinkProps["href"];
}) => {
    const pathname = usePathname();
    const isActive = href === pathname;

    return (
        <li className={styles.li}>
            <Link
                className={`${styles.link} ${isActive ? styles.link__active : ""}`}
                href={href}>
                {children}
            </Link>
        </li>
    );
};