"use client";
import React, {RefObject} from "react";
import styles from "./Navigation.module.css";
import {LinkProps} from "next/link";
import {Link, usePathname} from "@/i18n/navigation";
import {useTranslations} from "next-intl";

export const Navigation = ({
    isOpen,
    navRef,
    onNavigate,
}: {
    isOpen: boolean;
    navRef: RefObject<HTMLElement | null>;
    onNavigate: () => void;
}) => {
    const t = useTranslations("Nav");

    return (
        <nav
            id={"navigation"}
            ref={navRef}
            tabIndex={-1}
            aria-label={t("ariaLabel")}
            className={`${styles.nav} ${isOpen ? styles.nav__open : ""}`}>
                <ul
                    className={styles.ul}>
                    <NavigationItem href={"/work"} onNavigate={onNavigate}>
                        {t("projects")}
                    </NavigationItem>
                    <NavigationItem href={"/about"} onNavigate={onNavigate}>
                        {t("about")}
                    </NavigationItem>
                </ul>
        </nav>
    );
};

export const NavigationItem = ({
    children,
    href,
    onNavigate,
} : {
    children: React.ReactNode;
    href: LinkProps["href"];
    onNavigate: () => void;
}) => {
    const pathname = usePathname();
    const isActive = pathname.includes(href.toString());

    return (
        <li className={styles.li}>
                <Link
                    aria-current={isActive ? "page" : undefined}
                    className={styles.link}
                    onClick={onNavigate}
                    href={href}>
                    {children}
                </Link>
        </li>
    );
};