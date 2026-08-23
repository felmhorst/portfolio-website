import React from "react";
import styles from "./index.module.css";

interface VenetianBlindsProps {
    count?: number;
}

export const VenetianBlinds: React.FC<VenetianBlindsProps> = ({
    count = 8,
}) => {
    return (
        <div className={styles.container}>
            {Array.from({length: count}).map((_, index) => (
                <div
                    key={index}
                    className={styles.blind}/>
            ))}
        </div>
    );
}