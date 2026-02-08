import {PropsWithChildren} from "react";
import styles from "./NavigationBar.module.css";
import Link from "next/link";

export const NavigationBar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <NavigationItem>
                    Projects
                </NavigationItem>
                <NavigationItem>
                    About
                </NavigationItem>
            </ul>
        </nav>
    );
};

export const NavigationItem = (props: PropsWithChildren) => {
    const {children} = props;

    return (
        <li className={styles.li}>
            <Link
                className={styles.link}
                href={"/"}>
                {children}
            </Link>
        </li>
    );
};