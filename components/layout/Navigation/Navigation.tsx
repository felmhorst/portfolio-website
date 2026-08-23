"use client";
import React, {RefObject} from "react";
import styles from "./Navigation.module.css";
import {LinkProps} from "next/link";
import {Link, usePathname} from "@/i18n/navigation";
import {useTranslations} from "next-intl";
import {AnimateChildren} from "@/components/animations/AnimateChildren";
import {Reveal} from "@/components/animations/Reveal";
import {Direction} from "@/utility/types";

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
        <AnimateChildren delay={1.6}>
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
        </AnimateChildren>
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
    const isActive = href === pathname;

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