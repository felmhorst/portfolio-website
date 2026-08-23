import styles from "./Footer.module.css";
import NextLink from "next/link";
import {Link} from "@/i18n/navigation";
import {GitHubLogo} from "@/components/icons/GitHubLogo";
import {LinkedInLogo} from "@/components/icons/LinkedInLogo";
import {useTranslations} from "next-intl";
import {Reveal} from "@/components/animations/Reveal";
import {AnimateChildren} from "@/components/animations/AnimateChildren";

export const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <AnimateChildren delay={1.8}>
            <footer
                role={"contentinfo"}
                className={styles.footer}>
                    <Link
                        className={styles.logo}
                        href={'/'}>
                        {t("name")}
                    </Link>
                    <NextLink
                        className={`${styles.social_link} ${styles.social_link__github}`}
                        href={"https://github.com/felmhorst"}
                        target={"_blank"}
                        aria-label={"GitHub"}>
                        <GitHubLogo/>
                    </NextLink>
                    <NextLink
                        className={styles.social_link}
                        href={"https://www.linkedin.com/in/florian-elmhorst-8282b7200/"}
                        target={"_blank"}
                        aria-label={"LinkedIn"}>
                        <LinkedInLogo/>
                    </NextLink>
            </footer>
        </AnimateChildren>
    );
};