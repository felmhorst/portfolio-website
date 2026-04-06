import styles from "./Footer.module.css";
import Link from "next/link";
import {GitHubLogo} from "@/components/icons/GitHubLogo";
import {LinkedInLogo} from "@/components/icons/LinkedInLogo";
import {useTranslations} from "next-intl";

export const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <footer className={styles.footer}>
            <Link
                className={styles.logo}
                href={'/'}>
                {t("name")}
            </Link>
            <Link
                className={`${styles.social_link} ${styles.social_link__github}`}
                href={"https://github.com/felmhorst"}
                target={"_blank"}
                aria-label={"GitHub"}>
                <GitHubLogo/>
            </Link>
            <Link
                className={styles.social_link}
                href={"https://www.linkedin.com/in/florian-elmhorst-8282b7200/"}
                target={"_blank"}
                aria-label={"LinkedIn"}>
                <LinkedInLogo/>
            </Link>
        </footer>
    );
};