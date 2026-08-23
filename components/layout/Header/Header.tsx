"use client";

import styles from "./Header.module.css";
import {Navigation} from "@/components/layout/Navigation/Navigation";
import {LocaleToggle} from "@/components/layout/LocaleToggle/LocaleToggle";
import {BurgerButton} from "@/components/layout/BurgerButton";
import {useMobileMenu} from "@/components/layout/Header/useMobileMenu";

export const Header = () => {
    const {isOpen, toggle, close, buttonRef, navRef} = useMobileMenu();

    return (
        <header
            role={"banner"}
            className={styles.header}>
            <Navigation isOpen={isOpen} navRef={navRef} onNavigate={close}/>
            <LocaleToggle/>
            <BurgerButton isOpen={isOpen} onToggle={toggle} buttonRef={buttonRef}/>
        </header>
    );
};