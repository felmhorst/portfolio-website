"use client";

import { motion } from "motion/react";
import type {PropsWithChildren} from "react";
import React from "react";
import {Direction} from "@/utility/types";
import type {Variants} from "motion";
import styles from "./index.module.css";

const getVariants = (direction: Direction, delay: number = 0): Variants => {
    const offset = 100;
    const offscreen = {
        left:  { x: offset, y: 0 },
        right: { x:  -offset, y: 0 },
        up:    { x: 0, y: offset },
        down:  { x: 0, y:  -offset },
    }[direction];

    return {
        initial: { ...offscreen, opacity: 0 },
        animate: { x: 0, y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay} },
        exit: { ...offscreen, opacity: 0, transition: { duration: 0.3, ease: "easeIn", delay }}
    };
};

interface SlideProps extends PropsWithChildren {
    direction?: Direction;
    tag?: keyof typeof motion;
    asChild?: boolean;
    delay?: number;
}

export const Slide: React.FC<SlideProps> = ({
    children,
    tag = "div",
    direction = Direction.Up,
    asChild = false,
    delay,
}) => {

    const MotionTag = motion[tag] as typeof motion.div; // workaround for TS2589

    return (
        <MotionTag
            className={styles.slide}
            variants={getVariants(direction, delay)}
            initial={asChild ? undefined : "initial"}
            animate={asChild ? undefined : "animate"}
            exit={asChild ? undefined : "exit"}>
            {children}
        </MotionTag>
    );
};