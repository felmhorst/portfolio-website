import styles from "./page.module.css";
import {Timeline} from "@/components/Timeline/Timeline";
import {Column, ColumnLayout} from "@/components/ColumnLayout/ColumnLayout";
import {useTranslations} from "next-intl";
import {AnimateChildren} from "@/components/animations/AnimateChildren";
import {Reveal} from "@/components/animations/Reveal";
import {Slide} from "@/components/animations/Slide";

export default function About() {
    const t = useTranslations("AboutPage");

    return (
        <ColumnLayout>
            <Column>
                <h1 className={styles.title}>
                    <AnimateChildren staggerDuration={.14}>
                        <Reveal
                            asChild={true}
                            className={styles.title_line}>
                            {t("heading.line1")}
                        </Reveal>
                        <Reveal
                            asChild={true}
                            className={styles.title_line}>
                            {t("heading.line2")}
                        </Reveal>
                        <Reveal
                            asChild={true}
                            className={styles.title_line}>
                            {t("heading.line3")}
                        </Reveal>
                    </AnimateChildren>
                </h1>
            </Column>
            <Column>

                <Slide delay={.4}>
                    <p>{t("description")}</p>
                </Slide>

                <Slide delay={.6}>
                    <Timeline/>
                </Slide>

            </Column>
        </ColumnLayout>
    );
}
