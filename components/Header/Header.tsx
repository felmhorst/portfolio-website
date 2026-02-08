import styles from "./Header.module.css";
import {NavigationBar} from "@/components/NavigationBar/NavigationBar";

export const Header = () => {
    return (
        <header className={styles.header}>
            <NavigationBar/>
        </header>
    );
};