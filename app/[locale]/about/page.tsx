import styles from "./page.module.css";
import {Timeline} from "@/components/ui/Timeline/Timeline";
import {Column, ColumnLayout} from "@/components/layout/ColumnLayout/ColumnLayout";
import {useTranslations} from "next-intl";
import {Slide} from "@/components/animations/Slide";

export default function About() {
    const t = useTranslations("AboutPage");

    return (
        <ColumnLayout>
            <Column>
                <h1 className={styles.title}>
                    {t("heading.line1")}<br/>
                    {t("heading.line2")}<br/>
                    {t("heading.line3")}
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
