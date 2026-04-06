import styles from "./Header.module.css";
import {NavigationBar} from "@/components/layout/NavigationBar/NavigationBar";
import {LocaleToggle} from "@/components/layout/LocaleToggle/LocaleToggle";

export const Header = () => {
    return (
        <header className={styles.header}>
            <NavigationBar/>
            <LocaleToggle/>
        </header>
    );
};