import React from "react";
import styles from "./LifeChapter.module.css";

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

    const label = !end
        ? `Since ${start}`
        : start !== end
            ? `From ${start} to ${end}`
            : `In ${start}`;

    return (
        <div className={styles.container}>
            <p
                className={styles.dates}
                aria-label={label}>
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