"use client";

import React from "react";
import {motion} from "motion/react";
import styles from "./index.module.css";
import {stagger} from "motion";

interface VenetianBlindsProps {
    isOpen: boolean;
    count?: number;
}

export const VenetianBlinds: React.FC<VenetianBlindsProps> = ({
    isOpen,
    count = 8,
}) => {

    return (
        <motion.div
            variants={{
                open: { transition: {delayChildren: stagger(0.06, {startDelay: .1, from: "first"}) }},
                closed: { transition: {delayChildren: stagger(0.02, {startDelay: 0, from: "last"}) }},
            }}
            initial={"closed"}
            animate={isOpen ? "open" : "closed"}
            exit={"closed"}
            className={styles.container}
            aria-hidden={true}>
            <motion.div
                className={styles.overlay}
            variants={{
                open: {opacity: 1, transition: {duration: .3, ease: "linear"}},
                closed: {opacity: 0, transition: {duration: .2, delay: .18, ease: "linear"}},
            }}/>
            {Array.from({length: count}).map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        className={styles.blind}
                        variants={{
                            closed: {scaleY: 0, transition: {duration: .2, ease: "easeIn"}},
                            open: {scaleY: 1, transition: {duration: .2, ease: "easeOut"}},
                        }}
                    />
                );
            })}
        </motion.div>
    );
}