"use client";

import React, {PropsWithChildren} from "react";
import { motion } from "motion/react";
import {Direction} from "@/utility/types";
import {Variants} from "motion";
import styles from "./index.module.css";

const getVariants = (direction: Direction): Variants => {
    const offscreen = {
        left:  { x: '100%', y: 0 },
        right: { x:  '-100%', y: 0 },
        up:    { x: 0, y: '100%' },
        down:  { x: 0, y:  '-100%' },
    }[direction];

    return {
        initial: { ...offscreen },
        animate: { x: 0, y: 0, transition: { duration: 0.3, ease: "easeOut"} },
        exit: { ...offscreen, transition: { duration: 0.15, ease: "easeIn" }}
    };
};

interface RevealProps extends PropsWithChildren {
    direction?: Direction;
    tag?: keyof typeof motion;
    asChild?: boolean;
    className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
    children,
    tag = "div",
    direction = Direction.Up,
    asChild = false,
    className = "",
}) => {

    const MotionTag = motion[tag] as typeof motion.div; // workaround for TS2589
    return (
        <div className={styles.container + " " + className}>
            <MotionTag
                className={styles.slide}
                variants={getVariants(direction)}
                initial={asChild ? undefined : "initial"}
                animate={asChild ? undefined : "animate"}
                exit={asChild ? undefined : "exit"}>
                {children}
            </MotionTag>
        </div>
    );
};