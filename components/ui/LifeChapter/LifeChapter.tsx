
import React from "react";
import styles from "./LifeChapter.module.css";
import {useTranslations} from "next-intl";

export interface LifeChapterProps {
    start: string;
    end?: string;
    title: string | React.ReactNode;
    description: string | React.ReactNode;
}

export const LifeChapter = (props: LifeChapterProps) => {
    const {
        start,
        end,
        title,
        description,
    } = props;
    const t = useTranslations("time");

    const label = !end
        ? `${t("since")} ${start}`
        : start !== end
            ? `${t("from")} ${start} ${t("to")} ${end}`
            : `${t("in")} ${start}`;

    return (
        <div
            className={styles.container}>
            <p
                className={styles.dates}
                aria-label={label}
                data-active={!end}>
                {!end && <span>since </span>}
                <time dateTime={start}>{start}</time>
                {!!end && start !== end && <>
                    <span className={styles.dash}>–</span>
                    <time dateTime={end}>{end}</time>
                </>}
            </p>
            <h2 className={styles.title}>
                {title}
            </h2>
            <p className={styles.description}>
                {description}
            </p>
        </div>
    );
}