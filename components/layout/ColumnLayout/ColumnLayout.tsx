import styles from "./ColumnLayout.module.css";
import React from "react";

export const ColumnLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};

export const Column = ({
    children,
}: {
    children?: React.ReactNode;
}) => {
    return (
        <div className={styles.column}>
            {children}
        </div>
    );
};