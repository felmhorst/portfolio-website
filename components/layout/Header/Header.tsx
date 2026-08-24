"use client";

import styles from "./Header.module.css";
import {Navigation} from "@/components/layout/Navigation/Navigation";
import {LocaleToggle} from "@/components/layout/LocaleToggle/LocaleToggle";
import {BurgerButton} from "@/components/layout/BurgerButton";
import {useMobileMenu} from "@/components/layout/Header/useMobileMenu";
import {VenetianBlinds} from "@/components/animations/VenetianBlinds";

export const Header = () => {
    const {isOpen, toggle, close, buttonRef, navRef} = useMobileMenu();

    return (
        <header
            role={"banner"}
            className={styles.header}>
            <div className={`${styles.menu} ${isOpen ? styles.menu__open : ""}`}>
                <VenetianBlinds isOpen={isOpen}/>
                <Navigation
                    isOpen={isOpen}
                    navRef={navRef}
                    onNavigate={close}/>
                <LocaleToggle isOpen={isOpen}/>
            </div>
            <BurgerButton
                isOpen={isOpen}
                onToggle={toggle}
                buttonRef={buttonRef}/>
        </header>
    );
};