"use client";

import React, {RefObject} from "react";
import styles from "./index.module.css";
import {useTranslations} from "next-intl";

export const BurgerButton = ({
    isOpen,
    onToggle,
    buttonRef,
}: {
    isOpen: boolean;
    onToggle: () => void;
    buttonRef: RefObject<HTMLButtonElement | null>;
}) => {
    const t = useTranslations("Nav");

    return (
        <button
            type={"button"}
            ref={buttonRef}
            aria-controls={"navigation"}
            aria-expanded={isOpen}
            aria-label={t(isOpen ? "closeMenu" : "openMenu")}
            onClick={onToggle}
            className={styles.burgerButton}>
            <div className={styles.burgerButton_wrapper}>
                <span className={styles.burgerButton_inner}/>
                <span className={styles.burgerButton_outer}/>
            </div>
        </button>
    );
}