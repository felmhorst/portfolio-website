import styles from "./page.module.css";
import {Timeline} from "@/components/Timeline/Timeline";
import {Column, ColumnLayout} from "@/components/ColumnLayout/ColumnLayout";
import {useTranslations} from "next-intl";

export default function About() {
    const t = useTranslations("AboutPage");

    return (
        <ColumnLayout>
            <Column>
                <h1 className={styles.title}>
                    <span dangerouslySetInnerHTML={{__html: t("title")}}/>
                </h1>
            </Column>
            <Column>
                <p>
                    {t("description")}
                </p>
                <Timeline/>
            </Column>
        </ColumnLayout>
    );
}
